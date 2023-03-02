import { useEffect, useState } from "react";
import { getItems } from "../helpers/localStorageHelp";

export default function Todolist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const list = getItems();
    console.log(list);
    setItems(list);
  }, []);

  return (
    <div>
      <ul>
        {items.map((e, i) => (
          <li key={i}>
            <div>
              <p>{e}</p>
              <input
                type="checkbox"
                onClick={() => localStorage.removeItem(i.toString())}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
