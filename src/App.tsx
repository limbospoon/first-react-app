import ListGroup from "./components/ListGroup";

function App() {
  const weapons = ["Sword", "Mace", "Staff", "Spear"];
  const armour = ["Chitin", "Iron", "Dragon Bone", "Ebony"];

  const handleOnItemSelect = (item: string) => {
    console.log("Selected ", item)
  }

  return (
    <div>
      <ListGroup items={weapons} heading="Weapons" onSelectItem={handleOnItemSelect}/>
      <ListGroup items={armour} heading="Armour" onSelectItem={handleOnItemSelect}/>
    </div>
  );
}

export default App;
