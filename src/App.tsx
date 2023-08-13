import ListGroup from "./components/ListGroup";

function App() {
  const weapons = ["Sword", "Mace", "Staff", "Spear"];
  const armour = ["Chitin", "Iron", "Dragon Bone", "Ebony"];
  return (
    <div>
      <ListGroup items={weapons} heading="Weapons"/>
      <ListGroup items={armour} heading="Armour"/>
    </div>
  );
}

export default App;
