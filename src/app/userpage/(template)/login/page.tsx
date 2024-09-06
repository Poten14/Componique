// /userpage/(template)/login/page.tsx
"use client";
import React from "react";
import Remote from "../../Remote/Remote";
import LoginForm from "./components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-3/4 p-8">
        <h1 className="mb-4 text-2xl font-bold">로그인 페이지</h1>
        <LoginForm />
      </div>
      <Remote />
    </div>
  );
};

export default LoginPage;
