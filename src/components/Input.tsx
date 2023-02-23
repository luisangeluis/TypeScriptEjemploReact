import { ChangeEventHandler } from 'react';

interface InputProps {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string;
}

const Input = ({ handleChange, placeholder, name, value }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      onChange={handleChange}
      name={name}
      value={value}
    />
  );
};

export default Input;
