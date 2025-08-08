import { useState } from "react";
import { DescriptionModal, Modal, Navigation } from "../components";
import CardList from "../components/CardList";
import MenuController from "../controllers/MenuController";

export default function Menu() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const sections = MenuController.getSectionsWithGeneral();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <Navigation
        sections={sections}
        selectedIndex={selectedIndex}
        onChangeIndex={(index) => {
          setSelectedIndex(index);
        }}
      />
      <CardList section={sections[selectedIndex]} />
      <Modal isVisible={modalIsVisible}>
        <DescriptionModal onClose={() => setModalIsVisible(false)} />
      </Modal>
    </div>
  );
}
