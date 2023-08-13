import { useState } from "react";

function ListGroup() {
  const items = ["Sword", "Mace", "Staff", "Spear"];

  /* Make react dynamic var for compent */
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /* Check if list is empty */
  const ListSizeCheck = items.length === 0 && <p>No Item Found</p>;
  /* Function that returns ListSizeCheck variable */
  const ListIsEmpty = () => {
    return ListSizeCheck;
  };

  return (
    /* Can only return html elements but using curly braces allows you to return more then html elements */
    <>
      <h1>List</h1>
      {/* Call ListIsEmpty function this allows the page to change dynamic depending
        if the list is empty or not */}
      {ListIsEmpty()}
      {/* class needs to be changed to className for JSX */}
      <ul className="list-group">
        {/* Covert items to list elements. Note: must be done between curly braces */}
        {items.map((item, index) => (
          <li key={item} className={selectedIndex === index ? "list-group-item active" : "list-group-item"} onClick={() => {setSelectedIndex(index);}}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
