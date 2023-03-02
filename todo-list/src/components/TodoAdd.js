import { useState } from "react";
import ReactModal from "react-modal";
import { addItemByIndex, getLastIndex } from "../helpers/localStorageHelp";

export default function TodoAdd() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addInput, setAddInput] = useState("");

  const insert = () => {
    addItemByIndex(getLastIndex() + 1, addInput);
    setModalIsOpen((prev) => !prev);
  };

  return (
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
  );
}
