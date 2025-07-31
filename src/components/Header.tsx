import "./styles/header.css";
import { Image } from "./index";
import logoImg from "/assets/logo-zoom.png";
import background from "/assets/fallback-cozinheira.jpg";
import { InstagramIcon, PhoneIcon } from "lucide-react";

export default function Header() {
  const INSTA_URL = import.meta.env.VITE_INSTA_URL;
  const wppUrl = import.meta.env.VITE_WPP_URL;
  return (
    <header className="headerContainer">
      <Image className="headerBackground" src={background} size={"unset"} />
      <div className="headerInfo">
        <Image className="headerLogo" src={logoImg} size={"unset"} />
        <div className="headerTextContainer">
          <p>ISABELLA CÁSTER</p>
          <div className="headerIcons">
            <a href={wppUrl}>
              <PhoneIcon className="headerIcon" />
            </a>
            <a href={INSTA_URL}>
              <InstagramIcon className="headerIcon" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
