import { useState, useEffect } from "react";

interface ProgressBarBasicProps {
  percent: number;
  showPercent?: boolean; // 진행률 표시 여부
  completed?: boolean; // 작업 완료 표시 여부
}

const ProgressBarBasic = ({
  percent,
  showPercent,
  completed,
}: ProgressBarBasicProps) => {
  const [progressBar, setProgressBar] = useState(percent);

  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  return (
    <div className="flex w-10/12 items-center">
      <div className="relative h-4 w-full rounded-full bg-[#D9D9D9]">
        <div
          className="h-4 rounded-full bg-Basic transition-all duration-500 ease-in-out"
          style={{ width: `${progressBar}%` }}
        ></div>
      </div>
      {showPercent && <span className="ml-2">{`${progressBar}%`}</span>}
      {progressBar === 100 && completed && <span className="ml-2">✅</span>}
    </div>
  );
};

export default ProgressBarBasic;
