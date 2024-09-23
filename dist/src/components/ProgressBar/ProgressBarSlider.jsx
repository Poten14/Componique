"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ProgressBarSlider = ({ percent, showPercent = true, completed = true, }) => {
    const [progressBar, setProgressBar] = (0, react_1.useState)(percent);
    (0, react_1.useEffect)(() => {
        setProgressBar(percent);
    }, [percent]);
    const handleSliderChange = (event) => {
        setProgressBar(Number(event.target.value));
    };
    return (<div className="w-full">
      <div className="flex items-center">
        <div className="h-4 w-full rounded-full bg-[#D9D9D9]">
          <div className="h-4 rounded-full bg-Basic transition-all" style={{ width: `${progressBar}%` }}/>
        </div>
        {showPercent && <span className="ml-2">{`${progressBar}`}</span>}
        {progressBar === 100 && <span className="ml-2">✅</span>}
      </div>
      <div>
        <input type="range" min="0" max="100" value={progressBar} onChange={handleSliderChange} className="mt-4"/>
      </div>
    </div>);
};
exports.default = ProgressBarSlider;
