"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("@components/Button/Button"));
const Input_1 = __importDefault(require("@components/Input/Input"));
const useTodoListStore_1 = require("../../../../store/useTodoListStore");
const CheckBox_1 = __importDefault(require("@components/CheckBox/CheckBox"));
const TodoListForm = () => {
    const { addButtonColor, addButtonSize, addButtonVariant, deleteButtonColor, deleteButtonSize, deleteButtonVariant, checkBoxColor, checkBoxVariant, todoList1, todoList2, todoList3, todoList4, inputSize, inputWidth, } = (0, useTodoListStore_1.useTodoListStore)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "rounded-3xl bg-white p-10 shadow-lg dark:bg-[#333742]", children: (0, jsx_runtime_1.jsxs)("div", { className: "space-y-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-2", children: [(0, jsx_runtime_1.jsx)(Input_1.default, { size: inputSize, width: inputWidth, variant: "outlined", placeholder: todoList1 }), (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-1", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: addButtonColor, size: addButtonSize, variant: addButtonVariant, className: "text-white", onClick: () => alert("일정을 추가했습니다"), children: "Add" }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: deleteButtonColor, size: deleteButtonSize, variant: deleteButtonVariant, className: "text-white", onClick: () => alert("일정을 삭제했습니다"), children: "Delete" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-2", children: [(0, jsx_runtime_1.jsx)(Input_1.default, { size: inputSize, width: inputWidth, variant: "outlined", placeholder: todoList2 }), (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-1", children: [(0, jsx_runtime_1.jsx)(CheckBox_1.default, { className: "p-5", color: checkBoxColor, variant: checkBoxVariant }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: deleteButtonColor, size: deleteButtonSize, variant: deleteButtonVariant, className: "text-white", onClick: () => alert("일정을 삭제했습니다"), children: "Delete" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-2", children: [(0, jsx_runtime_1.jsx)(Input_1.default, { size: inputSize, width: inputWidth, variant: "outlined", placeholder: todoList3 }), (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-1", children: [(0, jsx_runtime_1.jsx)(CheckBox_1.default, { className: "p-5", color: checkBoxColor, variant: checkBoxVariant }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: deleteButtonColor, size: deleteButtonSize, variant: deleteButtonVariant, className: "text-white", onClick: () => alert("일정을 삭제했습니다"), children: "Delete" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-2", children: [(0, jsx_runtime_1.jsx)(Input_1.default, { size: inputSize, width: inputWidth, variant: "outlined", placeholder: todoList4 }), (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-1", children: [(0, jsx_runtime_1.jsx)(CheckBox_1.default, { className: "p-5", color: checkBoxColor, variant: checkBoxVariant }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: deleteButtonColor, size: deleteButtonSize, variant: deleteButtonVariant, className: "text-white", onClick: () => alert("일정을 삭제했습니다"), children: "Delete" })] })] })] }) }) }));
};
exports.default = TodoListForm;