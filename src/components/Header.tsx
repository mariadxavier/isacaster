import "./styles/header.css";
import { Image } from "./index";
import logoImg from "../assets/logo-zoom.png";
import background from "../assets/fallback-cozinheira.jpg";
import { InstagramIcon, PhoneIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="headerContainer">
      <Image className="headerBackground" src={background} />
      <div className="headerInfo">
        <Image className="headerLogo" src={logoImg} />
        <div className="headerTextContainer">
          <p>ISABELLA CÁSTER</p>
          <div className="headerIcons">
            <a href="https://wa.me/qr/2FDMSN5HJ43XC1">
              <PhoneIcon />
            </a>
            <a href="https://www.instagram.com/isabella_caster?igsh=Y2FubHV6bnUxaHY0">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
