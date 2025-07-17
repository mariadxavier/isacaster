import type { MenuType } from "../types/Menu";
import "./styles/navigation.css";

type NavigationProps = {
  sections: MenuType[];
  selectedIndex: number;
  onChangeIndex: (idx: number) => void;
};

export default function Navigation({
  sections,
  selectedIndex,
  onChangeIndex,
}: NavigationProps) {
  const getClass = (selectedIndex: number, index: number): string => {
    const selected = "navItemText navItemSelected";
    const base = "navItemText";
    return selectedIndex === index ? selected : base;
  };

  const handleClick = (index: number) => {
    onChangeIndex(index);
  };

  return (
    <nav className="nav">
      <ul className="navList">
        {sections.map((section, index) => {
          return (
            <li >
              <button className={getClass(selectedIndex, index)} onClick={() => handleClick(index)}>
                {section.sectionName}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
