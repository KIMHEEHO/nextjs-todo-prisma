import { prisma } from "@/lib/prisma";

type CreateTodoInput = {
  title: string;
};

export async function createTodo(input: CreateTodoInput) {
  const { title } = input;
  return prisma.todo.create({
    data: {
      title,
    },
  });
}
