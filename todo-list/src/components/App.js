import { createContext } from "react";
import Todolist from "./Todolist";
import TodoProvider from "./TodoProvider";

export const TodoContext = createContext();

export default function TodoApp() {
  return (
    <TodoProvider>
      <Todolist />
    </TodoProvider>
  )
}
