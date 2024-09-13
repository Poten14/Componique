import TodoListForm from "./components/TodolistForm";
import RemoteTodoList from "../../Remote/RemoteTodoList";

const TodoListPage = () => {
  return (
    <div className="flex justify-between">
      <div className="mt-10 w-full p-6 pb-24 pl-[80px]">
        <TodoListForm />
      </div>
      <div className="fixed right-4 top-14">
        <RemoteTodoList />
      </div>
    </div>
  );
};

export default TodoListPage;
