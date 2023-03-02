import { useState } from "react";
import ReactModal from "react-modal";

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [addInput, setAddInput] = useState("");

  const insert = () => {
    setIndex((prev) => prev + 1);
    localStorage.setItem(`${index}`, addInput);
    setModalIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div>
        <h1>Liste des tâches</h1>
      </div>
      <div>
        <input placeholder="Rechercher une tâche..." />
      </div>
      <div>
        <ul>
          <li>
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
          </li>
        </ul>
      </div>
      <div>
        <button>Supprimer tout</button>
      </div>
    </div>
  );
}
