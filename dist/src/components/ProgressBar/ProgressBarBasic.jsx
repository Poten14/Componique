"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ProgressBarBasic = ({ percent, showPercent, completed, }) => {
    const [progressBar, setProgressBar] = (0, react_1.useState)(percent);
    (0, react_1.useEffect)(() => {
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
exports.default = ProgressBarBasic;
