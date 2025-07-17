import { Navigation } from "../components";
import CardList from "../components/CardList";
import MenuController from "../controllers/MenuController";

export default function Menu() {
  const sections = MenuController.getSectionsWithGeneral();

  return (
    <div className="menuContainer">
      <Navigation sections={sections} />
      <CardList section={sections[2]} />
    </div>
  );
}
