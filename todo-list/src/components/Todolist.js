import { useContext, useState } from "react";
import ReactModal from "react-modal";
import { TodoContext } from "./App";

export default function Todolist() {
  const { todos, addTodo, removeTodo, removeAll } = useContext(TodoContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addInput, setAddInput] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col">
      <div className="self-center">
        <h1 className="text-2xl text-italic text-white text-center w-fit bg-gray-900 rounded-full px-5 py-5 mt-5">
          Liste des tâches
        </h1>
      </div>
      <div className="mx-auto">
        <input
          className="border border-1 border-black px-2 py-2 rounded-lg mt-5 mb-5"
          placeholder="Rechercher une tâche..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
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
      <div className="mx-auto border border-1 border-black bg-gray-200 rounded-lg">
        <ul className="mx-auto w-fit space-y-5 px-3 py-3">
          {todos
            .filter((e) => (search.length > 0 ? e.text.includes(search) : e)) // improve this
            .map((todo, i) => (
              <li
                className="border border-1 border-black rounded-lg px-3 py-3 w-full bg-white hover:bg-black hover:text-white"
                key={i}
              >
                <div className="flex flex-row ">
                  <div className="flex-1 w-64">
                    <p className="break-words">{todo.text}</p>
                  </div>
                  <div className="justify-end">
                    <button
                      className="w-4 h-4 border border-2 border-black rounded-full hover:border-white"
                      onClick={() => removeTodo(todo.id)}
                    />
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="mx-auto flex flex-row mt-2 space-x-5">
        <button className="bg-green-500 text-white rounded-lg px-2 py-2" onClick={() => setModalIsOpen((prev) => !prev)}>
          Ajouter une tâche
        </button>
        <button className="bg-red-500 text-white rounded-lg px-2 py-2" onClick={() => removeAll()}>Supprimer tout</button>
      </div>
    </div>
  );
}
