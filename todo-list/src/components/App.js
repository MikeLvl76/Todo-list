import { useState } from "react";
import TodoAdd from "./TodoAdd";
import Todolist from "./Todolist";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div>
        <h1>Liste des tâches</h1>
      </div>
      <div>
        <input
          placeholder="Rechercher une tâche..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <TodoAdd />
      <Todolist filter={search} />
      <div>
        <button onClick={() => localStorage.clear()}>Supprimer tout</button>
      </div>
    </div>
  );
}
