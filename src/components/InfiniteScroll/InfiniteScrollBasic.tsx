import { useState, useRef, useCallback, useEffect } from "react";
import BasicSpinner from "@components/Spinner/BasicSpinner";

interface InfiniteScrollBasicProps {
  id: number;
  text: string;
}

interface InfiniteScrollProps {
  content: string; // 텍스트 파일의 내용을 받는 props
}

const InfiniteScrollBasic: React.FC<InfiniteScrollProps> = ({ content }) => {
  const [items, setItems] = useState<InfiniteScrollBasicProps[]>([]); // txt파일을 문장별로 저장
  const [page, setPage] = useState(1); // 현재 로드된 페이지 번호 저장
  const [isLoading, setIsLoading] = useState(false); // 데이터를 로드중인지, 초기는 로드X
  const [hasMore, setHasMore] = useState(true); // 추가로 로드할 내용이 있으면 true로 변경
  const loader = useRef(null); // 렌더링될때 새로운 문장을 로드하도록 설정

  const lines = content.split(".");
  const itemsPerPage = 1; // 문장별로 나누고 1문장씩 보여주기

  const loadMoreItems = useCallback(() => {
    if (isLoading || !hasMore) return; // 로딩중이거나 더 로드할 데이터가 없을시 return

    setIsLoading(true); // 데이터 로드 중임을 표시

    setTimeout(() => {
      // 현재 페이지에서 가져올 텍스트 줄들 계산
      const start = (page - 1) * itemsPerPage; // 인덱스를 0부터 시작하기 위해 1을 빼고 페이지당 보여줄 문장의 인덱스 입력 0,1,2...
      const end = start + itemsPerPage;

      // 시작점이 전체 로드의 데이터 수보다 클 경우 로드할 내용이 없음.
      if (start >= lines.length) {
        setHasMore(false);
        setIsLoading(false);
        return;
      }

      const newItems = lines.slice(start, end).map((content, index) => ({
        id: start + index + 1,
        text: content,
      }));

      setItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);

      setIsLoading(false);
    }, 1000);
  }, [page, lines, isLoading, hasMore]);

  useEffect(() => {
    const options = {
      root: null, // 관찰 기준요소 설정
      rootMargin: "20px", // 20픽셀 남으면 렌더링 시작
      threshold: 1.0, // 화면에 얼만큼 들어왔을때 콜백이 실행될지. 1.0=> 다 들어오면 실행
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading && hasMore) {
        loadMoreItems();
      }
    }, options);

    const currentLoader = loader.current;

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [loadMoreItems, isLoading, hasMore]);

  return (
    <div className="p-4">
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="rounded-md border p-4 shadow-sm">
            {item.text}
          </li>
        ))}
      </ul>
      <div ref={loader} className="py-10 text-center">
        {isLoading && hasMore ? (
          <BasicSpinner /> // 로딩 중일 때 스피너 표시
        ) : hasMore ? (
          "Scroll down to load more"
        ) : (
          "No more items to load"
        )}
      </div>
    </div>
  );
};

export default InfiniteScrollBasic;
