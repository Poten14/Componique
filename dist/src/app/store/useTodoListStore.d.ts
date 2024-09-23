type ExtraSize = "xs" | "small" | "medium" | "large" | "xl";
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
    setTodoListState: (key: keyof Omit<TodoListState, "setTodoListState">, value: string) => void;
}
export declare const useTodoListStore: import("zustand").UseBoundStore<import("zustand").StoreApi<TodoListState>>;
export {};
