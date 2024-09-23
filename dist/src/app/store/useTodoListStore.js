"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTodoListStore = void 0;
const zustand_1 = require("zustand");
exports.useTodoListStore = (0, zustand_1.create)((set) => ({
    addButtonColor: "primary",
    addButtonSize: "medium",
    addButtonVariant: "solid",
    deleteButtonColor: "danger",
    deleteButtonSize: "medium",
    deleteButtonVariant: "solid",
    checkBoxColor: "primary",
    checkBoxVariant: "border",
    todoList1: "Item 1",
    todoList2: "Item 2",
    todoList3: "Item 3",
    todoList4: "Item 4",
    inputSize: "medium",
    inputWidth: "100%",
    setTodoListState: (key, value) => set((state) => ({
        ...state,
        [key]: value,
    })),
}));
