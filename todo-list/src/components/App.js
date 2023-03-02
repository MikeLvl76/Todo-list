import { useState } from "react";
import ReactModal from "react-modal";
import { getLastIndex } from "../helpers/localStorageHelp";
import Todolist from "./Todolist";

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addInput, setAddInput] = useState("");
  const [search, setSearch] = useState("");

  const insert = () => {
    localStorage.setItem(`${getLastIndex() + 1}`, addInput);
    setModalIsOpen((prev) => !prev);
  };

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
      <div>
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
          <button onClick={insert}>Confirmer</button>
        </ReactModal>
      </div>
      <Todolist filter={search} />
      <div>
        <button onClick={() => localStorage.clear()}>Supprimer tout</button>
      </div>
    </div>
  );
}
