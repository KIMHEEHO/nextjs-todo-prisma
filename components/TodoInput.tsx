"use client";
import { createTodoAction } from "@/actions/todo";
import { useState } from "react";

export default function TodoInput() {
  const [title, setTitle] = useState("");
  const createTodo = async () => {
    await createTodoAction(title);
    setTitle("");
  };

  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={createTodo}>추가</button>
    </>
  );
}
