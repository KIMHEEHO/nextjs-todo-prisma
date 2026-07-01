"use server";

import { revalidatePath } from "next/cache";
import { createTodo } from "@/data-access/createTodo";
import { updateTodo, type UpdateTodoInput } from "@/data-access/updateTodo";
import { deleteTodo } from "@/data-access/deleteTodo";
import { ToggleTodoInput } from "@/types/todo";

// 할 일 생성
export async function createTodoAction(title: string) {
  await createTodo({ title });
  revalidatePath("/");
}

// 완료/미완료 여부 수정
export async function toggleTodoAction(input: ToggleTodoInput) {
  await updateTodo(input);
  revalidatePath("/");
}

// 할 일 수정
export async function updateTodoAction(input: UpdateTodoInput) {
  await updateTodo(input);
  revalidatePath("/");
}

// 할 일 삭제
export async function deleteTodoAction(id: number) {
  await deleteTodo({ id });
  revalidatePath("/");
}
