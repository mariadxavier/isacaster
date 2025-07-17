import type { MenuType } from "../types/Menu";
import Card from "./Card";

type CardListProps = {
  section: MenuType;
};

export default function CardList({ section }: CardListProps) {
  const produts = section.sectionProducts;

  return (
    <div>
      {produts &&
        produts.map((prod) => (
          <Card color={section.sectionColor} product={prod} />
        ))}
    </div>
  );
}
