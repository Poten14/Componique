"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __importDefault(require("@components/Button/Button"));
const Input_1 = __importDefault(require("@components/Input/Input"));
const useTodoListStore_1 = require("../../../../store/useTodoListStore");
const CheckBox_1 = __importDefault(require("@components/CheckBox/CheckBox"));
const TodoListForm = () => {
    const { addButtonColor, addButtonSize, addButtonVariant, deleteButtonColor, deleteButtonSize, deleteButtonVariant, checkBoxColor, checkBoxVariant, todoList1, todoList2, todoList3, todoList4, inputSize, inputWidth, } = (0, useTodoListStore_1.useTodoListStore)();
    return (<div className="flex items-center justify-center">
      <div className="rounded-3xl bg-white p-10 shadow-lg dark:bg-[#333742]">
        <div className="space-y-6">
          <div className="flex space-x-2">
            <Input_1.default size={inputSize} width={inputWidth} variant="outlined" placeholder={todoList1}/>
            <div className="flex space-x-1">
              <Button_1.default color={addButtonColor} size={addButtonSize} variant={addButtonVariant} className="text-white" onClick={() => alert("일정을 추가했습니다")}>
                Add
              </Button_1.default>
              <Button_1.default color={deleteButtonColor} size={deleteButtonSize} variant={deleteButtonVariant} className="text-white" onClick={() => alert("일정을 삭제했습니다")}>
                Delete
              </Button_1.default>
            </div>
          </div>
          <div className="flex space-x-2">
            <Input_1.default size={inputSize} width={inputWidth} variant="outlined" placeholder={todoList2}/>
            <div className="flex space-x-1">
              <CheckBox_1.default className="p-5" color={checkBoxColor} variant={checkBoxVariant}/>
              <Button_1.default color={deleteButtonColor} size={deleteButtonSize} variant={deleteButtonVariant} className="text-white" onClick={() => alert("일정을 삭제했습니다")}>
                Delete
              </Button_1.default>
            </div>
          </div>
          <div className="flex space-x-2">
            <Input_1.default size={inputSize} width={inputWidth} variant="outlined" placeholder={todoList3}/>
            <div className="flex space-x-1">
              <CheckBox_1.default className="p-5" color={checkBoxColor} variant={checkBoxVariant}/>
              <Button_1.default color={deleteButtonColor} size={deleteButtonSize} variant={deleteButtonVariant} className="text-white" onClick={() => alert("일정을 삭제했습니다")}>
                Delete
              </Button_1.default>
            </div>
          </div>
          <div className="flex space-x-2">
            <Input_1.default size={inputSize} width={inputWidth} variant="outlined" placeholder={todoList4}/>
            <div className="flex space-x-1">
              <CheckBox_1.default className="p-5" color={checkBoxColor} variant={checkBoxVariant}/>
              <Button_1.default color={deleteButtonColor} size={deleteButtonSize} variant={deleteButtonVariant} className="text-white" onClick={() => alert("일정을 삭제했습니다")}>
                Delete
              </Button_1.default>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
exports.default = TodoListForm;
