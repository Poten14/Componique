"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Button_1 = __importDefault(require("../Button/Button"));
const ColorPickerUI = ({ colors, selectColor }) => {
    const [selectedColor, setSelectedColor] = (0, react_1.useState)("#ffffff");
    const [msg, setMsg] = (0, react_1.useState)("");
    const onClickCopyHandler = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setMsg("The selected color has been copied!");
            setTimeout(() => setMsg(""), 2000);
        }
        catch (error) {
            setMsg("Copy failed.");
        }
    };
    const onChangeColorHandler = (color) => {
        setSelectedColor(color);
        if (selectColor) {
            selectColor(color); // prop으로 전달된 selectColor 함수 호출
        }
    };
    return (<>
      <div className="w-72 space-y-4 rounded-lg bg-slate-100 py-9 text-center dark:bg-[#2A2E39]">
        <div className="flex items-center justify-center">
          <input type="text" value={selectedColor} className="mr-2 w-24 px-2 py-1 text-center text-xl outline-none" readOnly/>
          <Button_1.default radius="small" onClick={() => {
            onClickCopyHandler(selectedColor);
        }}>
            Copy
          </Button_1.default>
        </div>
        <p className="text-sm">{msg}</p>
        <div>
          <input type="color" className="mb-2 h-10 w-52 cursor-pointer bg-transparent" value={selectedColor} onChange={(e) => {
            onChangeColorHandler(e.target.value); // onChangeColorHandler를 호출해서 색상 변경
        }}/>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="flex w-52 flex-wrap justify-evenly">
            {colors.map((item, index) => (<div key={index} className={`h-[33px] w-[33px] rounded border border-slate-200 dark:border-slate-800 ${selectedColor === item ? "border-2 border-slate-500 dark:border-slate-200" : ""}`} style={{ backgroundColor: item }} onClick={() => {
                onChangeColorHandler(item); // 클릭 시 색상 변경
            }}></div>))}
          </div>
        </div>
      </div>
    </>);
};
exports.default = ColorPickerUI;
