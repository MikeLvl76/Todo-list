import { useContext, useState } from "react";
import ReactModal from "react-modal";
import { TodoContext } from "./App";

const showPriority = (priority) => {
  if (priority === 0) return "Faible";
  if (priority === 1) return "Moyenne";
  if (priority === 2) return "Haute";
  if (priority === 3) return "Très haute";
};

export default function Todolist() {
  const { todos, addTodo, removeTodo, removeAll } = useContext(TodoContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addInput, setAddInput] = useState("");
  const [priority, setPriority] = useState(0);
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
          className="w-96 border border-1 border-black px-2 py-2 rounded-lg mt-5 mb-5"
          placeholder="Rechercher une tâche..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ReactModal
        className="mx-auto place-self-center mt-5 w-96 h-80 border border-1 border-black rounded-lg flex flex-col bg-white"
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen((prev) => !prev)}
      >
        <h1 className="text-xl text-center text-white h-fit bg-blue-500 rounded-lg">
          Tapez votre tâche à faire (50 caractères max.)
        </h1>
        <input
          className="border border-1 border-black mx-auto px-2 py-2 w-min rounded-lg mt-5 mb-5"
          placeholder="Ajouter une tâche"
          minLength={1}
          maxLength={50}
          onChange={(e) => setAddInput(e.target.value)}
        />
        <div className="flex flex-col mx-auto px-2 py-2  mb-5 border border-1 border-blue-500 w-fit border-dotted rounded-lg">
          <label className="text-center">Priorité</label>
          <input
            className="w-min mx-auto"
            type="range"
            min={0}
            max={3}
            value={priority}
            onChange={(e) => setPriority(parseInt(e.target.value))}
          />
          <p className="text-center">{showPriority(priority)}</p>
        </div>
        <button
          className="mx-auto bg-blue-500 w-min text-white rounded-lg px-2 py-2"
          onClick={() => {
            addTodo(addInput, priority);
            setModalIsOpen((prev) => !prev);
          }}
        >
          Confirmer
        </button>
      </ReactModal>
      <div className="mx-auto border border-1 border-black bg-gray-200 rounded-lg overflow-auto w-96 h-96">
        <ul className="mx-auto w-fit space-y-5 px-3 py-3">
          {todos
            .sort((a, b) => b.priority - a.priority)
            .filter((e) => (search.length > 0 ? e.text.startsWith(search) : e))
            .map((todo, i) => (
              <li
                className="border border-1 border-black rounded-lg px-3 py-3 w-full bg-white hover:bg-black hover:text-white"
                key={i}
                title={`Ajouté le ${todo.date}`}
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
      <div className="mx-auto flex flex-row items-stretch mt-2">
        <button
          className="bg-green-500 text-white rounded-lg px-2 py-2 grow focus:outline-none hover:bg-green-700"
          onClick={() => setModalIsOpen((prev) => !prev)}
        >
          Ajouter une tâche
        </button>
        <button
          className="bg-red-500 text-white rounded-lg px-2 py-2 grow focus:outline-none hover:bg-red-700"
          onClick={() => removeAll()}
        >
          Supprimer tout
        </button>
      </div>
    </div>
  );
}
