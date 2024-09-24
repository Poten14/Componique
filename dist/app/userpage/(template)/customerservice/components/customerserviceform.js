"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const DropDownBasic_1 = __importDefault(require("@components/DropDown/DropDownBasic"));
const DropDownGrouped_1 = __importDefault(require("@components/DropDown/DropDownGrouped"));
const Input_1 = __importDefault(require("@components/Input/Input"));
const Textarea_1 = __importDefault(require("@components/Textarea/Textarea"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const Toast_1 = __importDefault(require("@components/Toast/Toast"));
const Imageupload_1 = __importDefault(require("@components/ImageUpload/Imageupload"));
const useServiceStore_1 = require("../../../../store/useServiceStore");
const CustomerServiceForm = () => {
    const { numberType, phoneNumber, serviceItem, name, email, title, details, attachment, inputSize1, inputVariant1, inputSize2, inputVariant2, buttonColor1, buttonSize1, buttonVariant1, buttonColor2, buttonSize2, buttonVariant2, dropDownOption1, dropDownOption2, dropDownType1, dropDownType2, detailSize, detailColor, detailResize, imageUploadSize, imageUploadColor, imageUploadShape, imageUploadVariant, setServiceState, } = (0, useServiceStore_1.useServiceStore)();
    const [showToast, setShowToast] = (0, react_1.useState)(false);
    const [toastMessage, setToastMessage] = (0, react_1.useState)("");
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkMode);
        };
        checkDarkMode();
        window.addEventListener("storage", checkDarkMode);
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => {
            window.removeEventListener("storage", checkDarkMode);
            observer.disconnect();
        };
    }, [
        numberType,
        phoneNumber,
        serviceItem,
        name,
        email,
        title,
        details,
        attachment,
        dropDownOption1,
        dropDownOption2,
        dropDownType1,
        dropDownType2,
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phoneNumber || !title || !details) {
            setToastMessage("모든 필드를 입력해주세요.");
            setShowToast(true);
            return;
        }
        setToastMessage("문의가 성공적으로 제출되었습니다.");
        setShowToast(true);
    };
    const handleImageSelect = (data) => {
        setServiceState("attachment", data);
    };
    const handleDetailSizeChange = (newSize) => {
        setServiceState("detailSize", newSize);
    };
    const handleDetailColorChange = (newColor) => {
        setServiceState("detailColor", newColor);
    };
    const handleDetailResizeChange = (newResize) => {
        setServiceState("detailResize", newResize);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center", children: (0, jsx_runtime_1.jsxs)("div", { className: `w-full max-w-lg rounded-3xl p-10 shadow-lg ${isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"}`, children: [(0, jsx_runtime_1.jsx)("h1", { className: `mb-8 text-center text-2xl font-bold ${isDarkMode ? "text-[#dfdfdf]" : "text-Gray"}`, children: "Customer Service" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "space-y-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: isDarkMode ? "text-[#dfdfdf]" : "", children: "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBC Select your inquiry type:" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex", children: [(0, jsx_runtime_1.jsx)(DropDownBasic_1.default, { option: dropDownOption1, placeholder: "Number Type", onSelect: (value) => setServiceState("numberType", value), type: dropDownType1 }), (0, jsx_runtime_1.jsx)("div", { className: "mr-2" }), (0, jsx_runtime_1.jsx)(Input_1.default, { size: inputSize1, variant: inputVariant1, placeholder: "Phone Number", value: phoneNumber, onChange: (e) => setServiceState("phoneNumber", e.target.value) })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex w-full", children: (0, jsx_runtime_1.jsx)(DropDownGrouped_1.default, { options: dropDownOption2, defaultOption: "Service Item", onSelect: (value) => setServiceState("serviceItem", value), type: dropDownType2 }) }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: isDarkMode ? "text-[#dfdfdf]" : "", children: "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBB Please provide details of your inquiry:" }), (0, jsx_runtime_1.jsx)(Input_1.default, { size: inputSize2, variant: inputVariant2, placeholder: "Enter Subject", value: title, onChange: (e) => setServiceState("title", e.target.value), width: "100%" }), (0, jsx_runtime_1.jsx)(Textarea_1.default, { size: detailSize, color: detailColor, resize: detailResize, placeholder: "Enter Detailed Description", value: details, onChange: (e) => setServiceState("details", e.target.value), className: isDarkMode ? "dark:bg-[#2A2E39] dark:text-[#dfdfdf]" : "" }), (0, jsx_runtime_1.jsx)("h1", { className: isDarkMode ? "text-[#dfdfdf]" : "", children: "\uD83D\uDEE0\uFE0F Image Upload" }), (0, jsx_runtime_1.jsx)(Imageupload_1.default, { size: imageUploadSize, color: imageUploadColor, shape: imageUploadShape, variant: imageUploadVariant, onImageSelect: handleImageSelect, text: "+ Upload", className: isDarkMode ? "dark:bg-[#2A2E39] dark:text-[#dfdfdf]" : "" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 flex", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: buttonColor1, size: buttonSize1, variant: buttonVariant1, type: "button", className: `mr-6 w-full text-white ${isDarkMode ? "bg-[#444B58]" : ""}`, children: "Cancel" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: buttonColor2, size: buttonSize2, variant: buttonVariant2, type: "submit", className: `w-full text-white ${isDarkMode ? "bg-[#444B58]" : ""}`, children: "Submit" })] })] }), showToast && ((0, jsx_runtime_1.jsx)(Toast_1.default, { isOpen: showToast, onClose: () => setShowToast(false), color: toastMessage.includes("success") ? "success" : "danger", children: toastMessage }))] }) }));
};
exports.default = CustomerServiceForm;
