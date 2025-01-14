import { TodoRowUpdate } from "./todo-actions";
("use server");

import { Database } from "types_db";
import { createServerSupabaseClient } from "./../utils/supabase/server";

export type TodoRow = Database["public"]["Tables"]["todo"]["Row"];
export type TodoRowInsert = Database["public"]["Tables"]["todo"]["Insert"];
export type TodoRowUpdate = Database["public"]["Tables"]["todo"]["Update"];

function handleError(error) {
  console.log(error);
  throw new Error(error.message);
}

export async function getTodos({ searchInput = "" }): Promise<TodoRow[]> {
  const supabase = await createServerSupabaseClient();

  //리스트에서 항목 검색 부분
  const data = supabase
    .from("todo")
    .select("*")
    .like("title", `%${searchInput}%`)
    .order("created_at", { ascending: true });

  if ((await data).error) {
    handleError((await data).error);
  }

  return (await data).data;
}

//create, update todo

export async function createTodo(todo: TodoRowInsert) {
  const supabase = await createServerSupabaseClient();

  const data = supabase.from("todo").insert({
    ...todo,
    created_at: new Date().toISOString(),
  });

  if ((await data).error) {
    handleError((await data).error);
  }

  return (await data).data;
}

export async function updateTodo(todo: TodoRowUpdate) {
  const supabase = await createServerSupabaseClient();

  const data = await supabase
    .from("todo")
    .update({
      ...todo,
      update_at: new Date().toISOString(),
    })
    .eq("id", todo.id);

  if ((await data).error) {
    handleError((await data).error);
  }

  return (await data).data;
}
