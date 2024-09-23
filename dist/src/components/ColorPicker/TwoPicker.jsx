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
const react_1 = __importStar(require("react"));
const ColorPicker_1 = __importDefault(require("./ColorPicker"));
const GradientPicker_1 = __importDefault(require("./GradientPicker"));
const TwoPicker = ({ onColorChange }) => {
    const [activePicker, setActivePicker] = (0, react_1.useState)("Color");
    const onChangeColorHandler = (color) => {
        if (onColorChange) {
            onColorChange(color); // 선택한 색상 정보를 전달
        }
    };
    return (<div className="mx-auto w-full max-w-xl select-none">
      <div className="flex items-center">
        <div className={`w-[80px] cursor-pointer py-1 text-center ${activePicker === "Color" ? "rounded-lg bg-Basic font-bold text-white" : "text-gray-500"}`} onClick={() => setActivePicker("Color")}>
          Color
        </div>
        <div className={`w-[90px] cursor-pointer py-1 text-center ${activePicker === "Gradient" ? "rounded-lg bg-Basic font-bold text-white" : "text-gray-500"}`} onClick={() => setActivePicker("Gradient")}>
          Gradient
        </div>
      </div>
      <div>
        {activePicker === "Color" ? (<div>
            <ColorPicker_1.default selectColor={onChangeColorHandler}/>
          </div>) : (<div>
            <GradientPicker_1.default selectColor={onChangeColorHandler}/>
          </div>)}
      </div>
    </div>);
};
exports.default = TwoPicker;
