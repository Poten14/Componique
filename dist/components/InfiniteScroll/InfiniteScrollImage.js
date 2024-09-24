"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const BasicSpinner_1 = __importDefault(require("../Spinner/BasicSpinner"));
const image_1 = __importDefault(require("next/image"));
const InfiniteScrollImage = ({ images }) => {
    const [items, setItems] = (0, react_1.useState)([]);
    const [page, setPage] = (0, react_1.useState)(1);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [hasMore, setHasMore] = (0, react_1.useState)(true);
    const loader = (0, react_1.useRef)(null);
    const itemsPerPage = 2;
    const loadMoreItems = (0, react_1.useCallback)(() => {
        if (isLoading || !hasMore)
            return; // 이미 로딩 중이거나 더 이상 로드할 항목이 없으면 함수 종료
        setIsLoading(true); // 로딩 시작
        setTimeout(() => {
            // 현재 페이지에서 가져올 이미지들의 인덱스 범위 계산
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            // 모든 이미지를 로드했다면 hasMore를 false로 설정
            if (start >= images.length) {
                setHasMore(false);
                setIsLoading(false);
                return;
            }
            // 새로운 이미지 URL들을 선택
            const newItems = images.slice(start, end);
            setItems((prev) => [...prev, ...newItems]);
            setPage((prev) => prev + 1);
            setIsLoading(false); // 로딩 종료
        }, 200);
    }, [page, images, isLoading, hasMore]);
    (0, react_1.useEffect)(() => {
        const options = {
            root: null, // viewport를 root로 사용
            rootMargin: "20px", // viewport 경계로부터 20px 지점에서 교차 감지 시작
            threshold: 1.0, // 타겟 요소가 100% 보일 때 콜백 실행
        };
        // Intersection Observer 생성
        const observer = new IntersectionObserver((entries) => {
            // 관찰 대상이 viewport에 진입하고, 로딩 중이 아니며, 더 불러올 항목이 있을 때 새 항목 로드
            if (entries[0].isIntersecting && !isLoading && hasMore) {
                loadMoreItems();
            }
        }, options);
        const currentLoader = loader.current;
        // 관찰 대상 요소가 존재하면 관찰 시작
        if (currentLoader) {
            observer.observe(currentLoader);
        }
        // 컴포넌트 언마운트 시 observer 정리
        return () => {
            if (currentLoader) {
                observer.unobserve(currentLoader);
            }
        };
    }, [loadMoreItems, isLoading, hasMore]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "p-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-3 gap-4", children: items.map((src, index) => ((0, jsx_runtime_1.jsx)(image_1.default, { src: src, alt: `image${index + 1}`, width: 200, height: 200, className: "rounded-md border shadow-sm" }, index))) }), (0, jsx_runtime_1.jsx)("div", { ref: loader, className: "py-10 text-center", children: isLoading && hasMore ? ((0, jsx_runtime_1.jsx)(BasicSpinner_1.default, {})) : hasMore ? ("Scroll down to load more") : ("No more items to load") })] }));
};
exports.default = InfiniteScrollImage;
