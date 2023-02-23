import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  handleclick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ handleclick }: ButtonProps) => {
  return (
    <button onClick={handleclick} className="button is-primary">
      Enviar
    </button>
  );
};

export default Button;
