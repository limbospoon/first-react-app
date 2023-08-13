import Alert from "./Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const weapons = ["Sword", "Mace", "Staff", "Spear"];
  const armour = ["Chitin", "Iron", "Dragon Bone", "Ebony"];

  const handleOnItemSelect = (item: string) => {
    console.log("Selected ", item);
  };

  const handleOnButtonClicked = () => {
    console.log("Click Button");
  };

  return (
    <div>
      <ListGroup
        items={weapons}
        heading="Weapons"
        onSelectItem={handleOnItemSelect}
      />
      <ListGroup
        items={armour}
        heading="Armour"
        onSelectItem={handleOnItemSelect}
      />
      <Alert>
        <span>This is an Alert</span>
      </Alert>
      <Button name="Equip" onClickedButton={handleOnButtonClicked} />
    </div>
  );
}

export default App;
