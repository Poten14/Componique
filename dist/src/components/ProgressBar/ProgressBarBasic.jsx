import { useState, useEffect } from "react";
const ProgressBarBasic = ({ percent, showPercent, completed, }) => {
    const [progressBar, setProgressBar] = useState(percent);
    useEffect(() => {
        setProgressBar(percent);
    }, [percent]);
    return (<div className="flex w-full items-center">
      <div className="relative h-4 w-full rounded-full bg-[#D9D9D9]">
        <div className="h-4 rounded-full bg-Basic transition-all duration-500 ease-in-out" style={{ width: `${progressBar}%` }}></div>
      </div>
      {showPercent && <span className="ml-2">{`${progressBar}%`}</span>}
      {progressBar === 100 && completed && <span className="ml-2">✅</span>}
    </div>);
};
export default ProgressBarBasic;
