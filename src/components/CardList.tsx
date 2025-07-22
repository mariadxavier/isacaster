import type { MenuType } from "../types/Menu";
import Card from "./Card";
import './styles/card.css';

type CardListProps = {
  section: MenuType;
};

export default function CardList({ section }: CardListProps) {
  const produts = section.sectionProducts;

  return (
    <div className="cardList">
      {produts &&
        produts.map((prod) => (
          <Card product={prod} />
        ))}
    </div>
  );
}
