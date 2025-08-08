import "./styles/header.css";
import { DescriptionModal, Image, Modal } from "./index";
import logoImg from "/assets/logo-zoom.png";
import background from "/assets/fallback-cozinheira.jpg";
import { InfoIcon, InstagramIcon, PhoneIcon } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const INSTA_URL = import.meta.env.VITE_INSTA_URL;
  const wppUrl = import.meta.env.VITE_WPP_URL;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <header className="headerContainer">
      <Modal isVisible={modalVisible}>
        <DescriptionModal onClose={() => setModalVisible(false)}/>
      </Modal>
      <Image className="headerBackground" src={background} size={"unset"} />
      <div className="headerInfo">
        <Image className="headerLogo" src={logoImg} size={"unset"} />
        <div className="headerTextContainer">
          <div className="headerNameContainer">
            <p>ISABELLA CÁSTER</p>
            <div onClick={() => setModalVisible(true)}>
              <InfoIcon />
            </div>
          </div>
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
