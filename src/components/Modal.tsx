import type { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  isVisible: boolean;
};
export default function Modal({ children, isVisible }: ModalProps) {
  return <div className="modalBg" style={{display: isVisible ? 'flex' : 'none'}}>{children}</div>;
}
