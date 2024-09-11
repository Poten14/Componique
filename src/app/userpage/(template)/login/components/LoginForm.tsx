// /userpage/(template)/login/components/LoginForm.tsx
"use client";
import React from "react";
import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import { useLoginStore } from "../../../../store/useLoginStore";
import CheckBox from "@components/CheckBox/CheckBox";

const LoginForm: React.FC = () => {
  const {
    title,
    buttonColor,
    buttonSize,
    buttonVariant,
    buttonColor2,
    buttonSize2,
    buttonVariant2,
    placeholder,
    placeholder2,
    inputSize,
    inputWidth,
    checkboxSize,
    checkboxColor,
    checkboxVariant,
    description,
  } = useLoginStore();

  const handleSubmit = () => {
    alert("로그인 완료");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="mb-8 text-center text-2xl font-bold text-Gray">
          {title}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              size={inputSize}
              width={inputWidth}
              variant="outlined"
              placeholder={placeholder}
            />
          </div>
          <div>
            <Input
              size={inputSize}
              width={inputWidth}
              variant="outlined"
              placeholder={placeholder2}
            />
          </div>
          <div className="flex text-Gray">
            <CheckBox
              boxSize={checkboxSize}
              color={checkboxColor}
              variant={checkboxVariant}
              description={description}
            />
          </div>
          <div className="mt-6">
            <Button
              color={buttonColor}
              size={buttonSize}
              variant={buttonVariant}
              onClick={handleSubmit}
              className="w-full text-white"
            >
              login
            </Button>
          </div>
          <div className="mt-4 text-center">
            <Button
              color={buttonColor2}
              size={buttonSize2}
              variant={buttonVariant2}
              className="w-full text-white"
              onClick={() => alert("회원가입 페이지로 이동")}
            >
              sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
