import TodoListForm from "./components/TodolistForm";
import RemoteTodoList from "../../Remote/RemoteTodoList";

const TodoListPage = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[calc(100%-350px)] p-6 pb-24 pl-[80px]">
        {/* pb-24는 로그인폼 기준 로그인폼의 아래 여백을 위해 표시한 것이므로 그외 작업시 생략 혹은 수정해도 됨 */}
        <h1 className="mb-10 ml-[70px] pb-4 text-2xl font-bold">
          프로필 페이지
        </h1>
        <TodoListForm />
      </div>
      <div className="fixed right-4 top-14">
        <RemoteTodoList />
      </div>
    </div>
  );
};

export default TodoListPage;
