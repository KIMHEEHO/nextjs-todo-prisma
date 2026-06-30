import { prisma } from "@/lib/prisma";

type UpdateTodoInput = {
  id: number;
  title: string;
  completed: boolean;
};

export async function updateTodo(input: UpdateTodoInput) {
  const { id, title, completed } = input;

  return prisma.todo.update({
    where: { id },
    data: { title, completed },
  });
}
