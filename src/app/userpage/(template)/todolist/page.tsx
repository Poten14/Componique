import TodoListForm from "./components/TodolistForm";
import Remote from "../../Remote/RemoteTodoList";

const LoginPage: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-3/4 p-8">
        <h1 className="mb-4 text-2xl font-bold">TodoList 페이지</h1>
        <TodoListForm />
      </div>
      <Remote />
    </div>
  );
};

export default LoginPage;
