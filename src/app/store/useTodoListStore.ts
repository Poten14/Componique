import { create } from "zustand";

// ExtraSize 타입 정의
type ExtraSize = "xs" | "small" | "medium" | "large" | "xl";

// Zustand를 사용하여 상태 관리
interface TodoListState {
  addButtonColor: "primary" | "secondary" | "success" | "warning" | "danger";
  addButtonSize: "small" | "medium" | "large";
  addButtonVariant: "solid" | "border" | "flat" | "light";
  deleteButtonColor: "primary" | "secondary" | "success" | "warning" | "danger";
  deleteButtonSize: "small" | "medium" | "large";
  deleteButtonVariant: "solid" | "border" | "flat" | "light";
  checkBoxColor: "primary" | "secondary" | "success" | "warning" | "danger";
  checkBoxVariant: "solid" | "border";
  todoList1: string;
  todoList2: string;
  todoList3: string;
  todoList4: string;
  inputSize: ExtraSize;
  inputWidth: string;
  setTodoListState: (
    key: keyof Omit<TodoListState, "setTodoListState">,
    value: string,
  ) => void;
}

export const useTodoListStore = create<TodoListState>((set) => ({
  addButtonColor: "primary",
  addButtonSize: "medium",
  addButtonVariant: "solid",
  deleteButtonColor: "danger",
  deleteButtonSize: "medium",
  deleteButtonVariant: "solid",
  checkBoxColor: "primary",
  checkBoxVariant: "border",
  todoList1: "항목 1번",
  todoList2: "항목 2번",
  todoList3: "항목 3번",
  todoList4: "항목 4번",
  inputSize: "medium",
  inputWidth: "100%",
  setTodoListState: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
