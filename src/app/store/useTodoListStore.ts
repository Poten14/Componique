import create from "zustand";

// ExtraSize 타입 정의
type ExtraSize = "xs" | "small" | "medium" | "large" | "xl";

// Zustand를 사용하여 상태 관리
interface TodoListState {
  textareaWidth: string;
  textareaSize: ExtraSize;
  textResize: "none" | "both" | "horizontal" | "vertical";
  checkBoxSize: "small" | "medium" | "large";
  checkBoxColor:
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
  checkBoxVariant: "solid" | "border";
  placeholder: string;
  setTodoListState: (
    key: keyof Omit<TodoListState, "setTodoListState">,
    value: string,
  ) => void;
}

export const useTodoListStore = create<TodoListState>((set) => ({
  textareaWidth: "w-[358px] h-[44px]",
  textareaSize: "medium",
  textResize: "both",
  checkBoxColor: "blue",
  checkBoxSize: "medium",
  checkBoxVariant: "solid",
  placeholder: "항목을 입력하세요",
  setTodoListState: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
