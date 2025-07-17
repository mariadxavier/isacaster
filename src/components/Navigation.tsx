import type { MenuType } from "../types/Menu";
import "./styles/navigation.css";

type NavigationProps = {
  sections: MenuType[];
};

export default function Navigation({ sections }: NavigationProps) {
  return (
    <nav>
      <ul className="navList">
        {sections.map((section) => {
          return <li style={{borderBottom:`1px solid ${section.sectionColor}`, color: `${section.sectionColor}`}}>{section.sectionName}</li>;
        })}
        <li>teste</li>
        <li>teste 1</li>
        <li>teste 2</li>
        <li>teste 3</li>
        <li>teste 4</li>
      </ul>
    </nav>
  );
}
