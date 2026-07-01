"use client";
import type { Todo } from "@/types/todo";
import {
  toggleTodoAction,
  updateTodoAction,
  deleteTodoAction,
} from "@/actions/todo";
import { useState } from "react";

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          toggleTodoAction({ id: todo.id, completed: !todo.completed })
        }
      />
      <span>#{todo.id}</span>
      {!isEditing ? (
        <span>{todo.title}</span>
      ) : (
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      )}
      {!isEditing ? (
        <button onClick={() => setIsEditing(true)}>수정</button>
      ) : (
        <button
          onClick={async () => {
            await updateTodoAction({
              id: todo.id,
              title: title.trim(),
            });

            setIsEditing(false);
          }}
        >
          저장
        </button>
      )}
      <button
        onClick={async () => {
          console.log("삭제할 id:", todo.id);
          await deleteTodoAction(todo.id);
        }}
      >
        삭제
      </button>
    </li>
  );
}
