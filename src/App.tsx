import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

//Components
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [count, setCount] = useState(0);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
  };

  const handleclick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    console.log('hola mundo');
  };

  return (
    <div className="App">
      <Input handleChange={handleChange} placeholder="Nombre" />
      <Button handleclick={handleclick} />
    </div>
  );
}

export default App;
