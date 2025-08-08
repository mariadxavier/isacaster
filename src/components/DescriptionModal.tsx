import { XIcon } from "lucide-react";
import "./styles/descriptionModal.css";
import containerBg from '/assets/bg_modal.jpg'

type DescriptionModalProps = {
    onClose: () => void;
}

export default function DescriptionModal({onClose} : DescriptionModalProps) {
  return (
    <div
      className="descriptionContainer"
      style={{backgroundImage: `url(${containerBg})`}}
    >
      <div onClick={onClose} className="descriptionExit">
        <XIcon />
      </div>
      <div className="descriptionTextContainer">
        <h3 className="descriptionTitle">Olá! Eu sou a Isabella!</h3>
        <p className="descriptionText">
          Sou formada como cozinheira profissional e tenho diversos cursos na
          área de confeitaria e panificação. Trabalho na cozinha da minha casa,
          com muito amor e cuidado, e todos os meus produtos são feitos de forma
          artesanal. Aqui, você encontra alguns dos itens mais vendidos. Os
          orçamentos são personalizados de acordo com o pedido. Se quiser algo
          diferente do que está aqui, é só me chamar! <br />
          Com carinho, Isabella Cáster
        </p>
      </div>
    </div>
  );
}
