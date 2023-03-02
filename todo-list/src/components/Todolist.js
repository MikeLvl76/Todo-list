import { useContext, useState } from "react";
import ReactModal from "react-modal";
import { TodoContext } from "./App";

export default function Todolist() {
  const { todos, addTodo, removeTodo, removeAll } = useContext(TodoContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addInput, setAddInput] = useState("");
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
      <button onClick={() => setModalIsOpen((prev) => !prev)}>
        Ajouter une tâche
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        styles={{ width: "50%" }}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen((prev) => !prev)}
      >
        <input
          placeholder="Ajouter une tâche"
          maxLength={50}
          onChange={(e) => setAddInput(e.target.value)}
        />
        <button
          onClick={() => {
            addTodo(addInput);
            setModalIsOpen((prev) => !prev);
          }}
        >
          Confirmer
        </button>
      </ReactModal>
      <ul>
        {todos
          .filter((e) => (search.length > 0 ? e.text === search : e))
          .map((todo, i) => (
            <li key={i}>
              <div>
                <p>{todo.text}</p>
                <input
                  type="checkbox"
                  onClick={() => removeTodo(todo.id)}
                  checked={false}
                />
              </div>
            </li>
          ))}
      </ul>
      <div>
        <button onClick={() => removeAll()}>Supprimer tout</button>
      </div>
    </div>
  );
}
