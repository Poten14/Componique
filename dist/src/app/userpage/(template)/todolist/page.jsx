"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodolistForm_1 = __importDefault(require("./components/TodolistForm"));
const RemoteTodoList_1 = __importDefault(require("../../Remote/RemoteTodoList"));
const TodoListPage = () => {
    return (<div className="flex justify-between">
      <div className="mt-10 w-full p-6 pb-24">
        <TodolistForm_1.default />
      </div>
      <div className="fixed right-4 top-14">
        <RemoteTodoList_1.default />
      </div>
    </div>);
};
exports.default = TodoListPage;
