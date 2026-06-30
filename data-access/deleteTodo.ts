import { prisma } from "@/lib/prisma";

type DeleteTodoInput = {
  id: number;
};
export async function deleteTodo(input: DeleteTodoInput) {
  const { id } = input;
  return prisma.todo.delete({
    where: { id },
  });
}
