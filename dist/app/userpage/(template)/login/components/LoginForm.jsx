"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const Input_1 = __importDefault(require("@components/Input/Input"));
const useLoginStore_1 = require("../../../../store/useLoginStore");
const CheckBox_1 = __importDefault(require("@components/CheckBox/CheckBox"));
const LoginForm = () => {
    const { title, buttonColor, buttonSize, buttonVariant, buttonColor2, buttonSize2, buttonVariant2, placeholder, placeholder2, inputSize, inputWidth, checkboxSize, checkboxColor, checkboxVariant, description, } = (0, useLoginStore_1.useLoginStore)();
    const handleSubmit = () => {
        alert("로그인 완료");
    };
    return (<div className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-lg dark:bg-[#333742]">
        <h1 className="mb-8 text-center text-2xl font-bold text-Gray dark:text-gray">
          {title}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input_1.default size={inputSize} width={inputWidth} variant="outlined" placeholder={placeholder}/>
          </div>
          <div>
            <Input_1.default size={inputSize} width={inputWidth} variant="outlined" placeholder={placeholder2}/>
          </div>
          <div className="flex text-Gray">
            <CheckBox_1.default boxSize={checkboxSize} color={checkboxColor} variant={checkboxVariant} description={description}/>
          </div>
          <div className="mt-6">
            <Button_1.default color={buttonColor} size={buttonSize} variant={buttonVariant} onClick={handleSubmit} className="w-full text-white">
              login
            </Button_1.default>
          </div>
          <div className="mt-4 text-center">
            <Button_1.default color={buttonColor2} size={buttonSize2} variant={buttonVariant2} className="w-full text-white" onClick={() => alert("회원가입 페이지로 이동")}>
              sign up
            </Button_1.default>
          </div>
        </form>
      </div>
    </div>);
};
exports.default = LoginForm;
