"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("@components/Button/Button"));
const navigation_1 = require("next/navigation");
const navigation_2 = require("next/navigation");
const UserPage = () => {
    const router = (0, navigation_1.useRouter)();
    const pathname = (0, navigation_2.usePathname)();
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: pathname.startsWith("/userpage") ? ((0, jsx_runtime_1.jsx)(Button_1.default, { className: "mr-4 w-[145px] text-[#555555] dark:bg-[#333742] dark:text-white", radius: "full", iconColor: "#fff", icon: "icon-user", onClick: () => {
                router.push("/");
            }, children: "Docs Page" })) : ((0, jsx_runtime_1.jsx)(Button_1.default, { className: "mr-4 w-[145px] text-[#555555] dark:bg-[#333742] dark:text-white", radius: "full", iconColor: "#fff", icon: "icon-user", onClick: () => {
                router.push("/userpage/sns");
            }, children: "User Page" })) }));
};
exports.default = UserPage;
