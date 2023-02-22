import { ChangeEventHandler } from 'react';

interface InputProps {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ handleChange, placeholder }: InputProps) => {
  return <input placeholder={placeholder} onChange={handleChange} />;
};

export default Input;
