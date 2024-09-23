"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __importDefault(require("@components/Button/Button"));
const image_1 = __importDefault(require("next/image"));
const react_1 = __importStar(require("react"));
const GradientPicker = ({ selectColor, }) => {
    const [colors, setColors] = (0, react_1.useState)({
        startColor: "#ffffff",
        endColor: "#000000",
    });
    const [position, setPosition] = (0, react_1.useState)("to right");
    const [msg, setMsg] = (0, react_1.useState)("");
    // 그라디언트 코드
    const gradientCode = `linear-gradient(${position}, ${colors.startColor}, ${colors.endColor})`;
    (0, react_1.useEffect)(() => {
        // 그라디언트 코드가 변경될 때마다 selectColor 콜백 호출
        if (selectColor) {
            selectColor(gradientCode);
        }
    }, [colors, position, gradientCode, selectColor]); // colors나 position이 변경될 때마다 호출
    const onClickCopyHandler = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setMsg("The selected gradient has been copied!");
            setTimeout(() => setMsg(""), 2000);
        }
        catch (error) {
            setMsg("Copy failed.");
        }
    };
    const onChangeColorHandler = (colorType) => (event) => {
        setColors({
            ...colors,
            [colorType]: event.target.value,
        });
    };
    const onChangePositionHandler = (event) => {
        setPosition(event.target.value);
    };
    return (<div className="w-72 space-y-4 rounded-lg bg-slate-100 py-9 text-center dark:bg-[#2A2E39]">
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <input type="color" value={colors.startColor} onChange={onChangeColorHandler("startColor")} className="mb-2 h-10 w-24 cursor-pointer bg-transparent"/>
          <p>To</p>
          <input type="color" value={colors.endColor} onChange={onChangeColorHandler("endColor")} className="mb-2 h-10 w-24 cursor-pointer bg-transparent"/>
        </div>

        <div className="relative flex w-full items-center justify-center space-x-2">
          <span>To</span>
          <select value={position} onChange={onChangePositionHandler} className="border-gray-300 block appearance-none rounded-lg border border-gray bg-white px-6 py-2 shadow-sm focus:border-Basic focus:outline-none focus:ring-2 focus:ring-Basic">
            <option value="to right">right</option>
            <option value="to left">left</option>
            <option value="to bottom">bottom</option>
            <option value="to top">top</option>
            <option value="to bottom right">bottom right</option>
            <option value="to bottom left">bottom left</option>
            <option value="to top right">top right</option>
            <option value="to top left">top left</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-[66px] flex items-center">
            <image_1.default src="/selectdown.svg" alt="arrow" width={15} height={15}/>
          </div>
        </div>
      </div>
      <div className="m-auto flex w-[200px] items-center justify-between">
        <p className="mt-2 text-left text-lg font-bold">Preview</p>
        <Button_1.default radius="small" onClick={() => {
            onClickCopyHandler(gradientCode);
        }}>
          Copy
        </Button_1.default>
      </div>

      <div className="m-auto h-16 w-52 rounded border border-slate-200" style={{
            background: gradientCode,
        }}/>
      <div>
        <p className="mt-2 text-sm">{msg}</p>
      </div>
      <textarea readOnly value={gradientCode} className="mt-4 w-52 resize-none rounded p-2 text-xl outline-none" rows={3}/>
    </div>);
};
exports.default = GradientPicker;
