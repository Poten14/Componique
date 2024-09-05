"use client";
import React from "react";
import Button from "@components/Button/Button";
import Input from "@components/Input/SearchInput2";

// LoginForm에서 사용될 Props 타입 정의
interface LoginFormProps {
  buttonColor:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "basic";
  buttonVariant: "solid" | "border" | "flat" | "light";
  buttonSize: "small" | "medium" | "large";
  placeholderText: string; // 이메일 입력 필드의 placeholder
  onSubmit: () => void; // 로그인 버튼 클릭 시 호출될 함수
}

const LoginForm: React.FC<LoginFormProps> = ({
  buttonColor,
  buttonVariant,
  buttonSize,
  placeholderText,
  onSubmit,
}) => {
  return (
    <form className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
      <Input placeholder={placeholderText} size="medium" />
      <Input
        type="password"
        placeholder="비밀번호"
        size="medium"
        className="mt-4"
      />
      <Button
        color={buttonColor}
        variant={buttonVariant}
        size={buttonSize}
        className="mt-6 w-full"
        onClick={onSubmit}
      >
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
