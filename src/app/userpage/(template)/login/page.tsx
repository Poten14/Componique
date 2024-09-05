"use client";

import React, { useState } from "react";
import RemoteControl from "./RemoteControl";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  // 상태를 명확히 지정
  const [buttonColor, setButtonColor] = useState<
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
    | "basic"
  >("primary");

  const [buttonSize, setButtonSize] = useState<"small" | "medium" | "large">(
    "medium",
  );

  const [buttonVariant, setButtonVariant] = useState<
    "solid" | "border" | "flat" | "light"
  >("solid");

  const [placeholderText, setPlaceholderText] =
    useState<string>("이메일을 입력하세요");

  const handleSubmit = () => {
    alert("로그인 처리!");
  };

  return (
    <div className={`flex min-h-screen flex-col items-center justify-center`}>
      <h1 className="mb-4 text-2xl font-bold">로그인 페이지</h1>
      {/* LoginForm에 필요한 프롭들을 전달 */}
      <LoginForm
        buttonColor={buttonColor}
        buttonVariant={buttonVariant}
        buttonSize={buttonSize}
        placeholderText={placeholderText}
        onSubmit={handleSubmit}
      />
      {/* RemoteControl을 통해 상태 변경 */}
      <RemoteControl
        buttonColor={buttonColor}
        setButtonColor={setButtonColor}
        placeholderText={placeholderText}
        setPlaceholderText={setPlaceholderText}
        buttonVariant={buttonVariant}
        setButtonVariant={setButtonVariant}
        buttonSize={buttonSize}
        setButtonSize={setButtonSize}
      />
    </div>
  );
};

export default LoginPage;
