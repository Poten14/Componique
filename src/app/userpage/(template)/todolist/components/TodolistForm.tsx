"use client";

import { useTodoListStore } from "../../../../store/useTodoListStore";
import Textarea from "@components/Textarea/Textarea";
import CheckBox from "@components/CheckBox/CheckBox";

const TodoListForm: React.FC = () => {
  const {
    textareaSize,
    textareaWidth,
    textResize,
    checkBoxColor,
    checkBoxSize,
    checkBoxVariant,
    placeholder,
  } = useTodoListStore();

  return (
    <div className="flex min-h-screen items-center justify-center bg-yellow-100">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-lg">
        <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
          <Textarea
            size={textareaSize}
            width={textareaWidth}
            resize={textResize}
            placeholder={placeholder}
          />
          <CheckBox
            size={checkBoxSize}
            color={checkBoxColor}
            variant={checkBoxVariant}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoListForm;
