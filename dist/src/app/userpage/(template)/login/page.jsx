"use client";
import React from "react";
import RemoteLogin from "../../Remote/RemoteLogin";
import LoginForm from "./components/LoginForm";
const LoginPage = () => {
    return (<div className="flex justify-between">
      <div className="mt-10 w-full p-6 pb-24">
        <LoginForm />
      </div>
      <div className="fixed right-4 top-14">
        <RemoteLogin />
      </div>
    </div>);
};
export default LoginPage;
