import TodoItem from "./TodoItem";
import type { Todo } from "@/types/todo";

type Props = {
  todos: Todo[];
};

export default function TodoList({ todos }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
