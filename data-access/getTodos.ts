import { prisma } from "@/lib/prisma";

export async function getTodos() {
  return prisma.todo.findMany();
}
