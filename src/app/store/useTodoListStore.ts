import { create } from "zustand";

// ExtraSize 타입 정의
type ExtraSize = "xs" | "small" | "medium" | "large" | "xl";

// Zustand를 사용하여 상태 관리
interface TodoListState {
  addButtonColor:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "basic";
  addButtonSize: "small" | "medium" | "large";
  addButtonVariant: "solid" | "border" | "flat" | "light";
  deleteButtonColor:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "basic";
  deleteButtonSize: "small" | "medium" | "large";
  deleteButtonVariant: "solid" | "border" | "flat" | "light";
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
  todoList1: "to do list 1",
  todoList2: "to do list 2",
  todoList3: "to do list 3",
  todoList4: "to do list 4",
  inputSize: "medium",
  inputWidth: "100%",
  setTodoListState: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
