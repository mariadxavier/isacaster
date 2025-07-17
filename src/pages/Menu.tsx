import { useState } from "react";
import { Navigation } from "../components";
import CardList from "../components/CardList";
import MenuController from "../controllers/MenuController";

export default function Menu() {
  const sections = MenuController.getSectionsWithGeneral();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="menuContainer">
      <Navigation
        sections={sections}
        selectedIndex={selectedIndex}
        onChangeIndex={(index) => {
          setSelectedIndex(index);
        }}
      />
      <CardList section={sections[selectedIndex]} />
    </div>
  );
}
