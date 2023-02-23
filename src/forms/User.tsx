import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
//Components
import Button from '../components/Button';
import Input from '../components/Input';

export type UserFormState = {
  name: string;
  username: string;
};

const initialValue: UserFormState = {
  name: '',
  username: '',
};

interface UserFormProps {
  handleSubmit: (user: UserFormState) => void;
}

const UserForm = ({ handleSubmit }: UserFormProps) => {
  const [form, setForm] = useState(initialValue);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof UserFormState;
    setForm({ ...form, [name]: e.target.value });
    console.log(e.target.value);
  };

  const handleclick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleSubmit(form);
    console.log(form);
    setForm(initialValue);
  };

  return (
    <>
      <Input
        value={form.name}
        name="name"
        handleChange={handleChange}
        placeholder="Nombre"
      />
      <Input
        value={form.username}
        name="username"
        handleChange={handleChange}
        placeholder="username"
      />
      <Button handleclick={handleclick} />
    </>
  );
};

export default UserForm;
