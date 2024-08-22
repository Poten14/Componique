import { useState, useEffect } from "react";

interface ProgressBarCircleProps {
  percent: number;
  showPercent?: boolean; // 진행률 표시 여부
  completed?: boolean; // 작업 완료 표시 여부
}

// 원형 진행 바 컴포넌트 정의
const ProgressBarCircle = ({
  percent,
  showPercent = true, // showPercent 기본값을 true로 설정
  completed = false, // completed 기본값을 false로 설정
}: ProgressBarCircleProps) => {
  const [progressBar, setProgressBar] = useState(percent); // 진행률 상태를 관리하는 state

  // percent 값이 변경될 때마다 progressBar 상태를 업데이트
  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  // 원형 진행 바의 크기와 둘레 계산
  const circleRadius = 50; // 원의 반지름 설정
  const circleCircumference = 2 * 3.14 * circleRadius; // 원의 둘레 계산
  const circleArea = ((100 - progressBar) / 100) * circleCircumference; // 진행률에 따라 원형이 채워질 부분 계산

  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <div
        className="flex h-full w-full items-center justify-center rounded-full"
        style={{
          // 진행률에 따라 원형 진행 바의 색상이 채워짐
          background: `conic-gradient(#9AC5E5 ${progressBar * 3.6}deg, #d1d5db ${progressBar * 3.6}deg)`,
        }}
      >
        {/* 원형의 중앙에 흰색 원을 배치, 그 안에 진행률 텍스트나 체크 표시 */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
          {/* showPercent가 true이면 진행률을 텍스트로 표시 */}
          {showPercent && (
            <span className="text-lg font-medium text-Basic">
              {`${progressBar}%`}
            </span>
          )}
          {/* 진행률이 100%이고 completed가 true이면 체크 표시를 보여줌 */}
          {completed && progressBar === 100 && (
            <span className="text-lg font-medium text-Basic">✅</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarCircle;
