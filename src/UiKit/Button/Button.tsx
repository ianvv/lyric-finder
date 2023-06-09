import React from "react";
import s from "./button.module.scss";

interface ButtonProps {
  title: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | (() => void);
  customRef?: React.RefObject<HTMLButtonElement>;
  // loadMoreHandleButton?: (event) => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, customRef }) => {
  return (
    <button ref={customRef} className={s.supportButton} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
