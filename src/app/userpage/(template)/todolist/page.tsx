import TodoListForm from "./components/TodolistForm";
import RemoteTodoList from "../../Remote/RemoteTodoList";

const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="w-full p-6 pb-24">
        <h1 className="mb-10 ml-[70px] pb-4 text-2xl font-bold">
          TodoList 페이지
        </h1>
        <TodoListForm />
      </div>
      <div className="w-1/4 p-4">
        <RemoteTodoList />
      </div>
    </div>
  );
};

export default LoginPage;
