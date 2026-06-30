import { createTodo } from "@/data-access/createTodo";
import { getTodos } from "@/data-access/getTodos";
import { updateTodo } from "@/data-access/updateTodo";
import { deleteTodo } from "@/data-access/deleteTodo";

export default async function Home() {
  // await createTodo({ title: "next.js 공부하기!" });
  await updateTodo({ id: 3, title: "데이터베이스붙이기", completed: true });
  // await deleteTodo({ id: 5 });
  const getTodo = await getTodos();
  console.log("나와라 얍", getTodo);

  return <h1>next.js와 데이터베이스 연동 연습중</h1>;
}
