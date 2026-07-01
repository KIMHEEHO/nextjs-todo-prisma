import { createTodo } from "@/data-access/createTodo";
import { getTodos } from "@/data-access/getTodos";
import { updateTodo } from "@/data-access/updateTodo";
import { deleteTodo } from "@/data-access/deleteTodo";
import TodoList from "@/components/TodoList";
import TodoInput from "@/components/TodoInput";

export default async function Home() {
  // await createTodo({ title: "next.js 공부하기!" });
  //await updateTodo({ id: 3, title: "데이터베이스붙이기", completed: true });
  // await deleteTodo({ id: 5 });
  const todos = await getTodos();

  return (
    <>
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  );
}
