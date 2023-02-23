import 'bulma/css/bulma.css';
import { useEffect, useState } from 'react';
import './App.css';
import UserForm, { UserFormState } from './forms/User';

type User = UserFormState & { id: number };

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} {user.username}
            </li>
          );
        })}
      </ul>
      <UserForm
        handleSubmit={(user) => {
          setUsers([...users, { ...user, id: Date.now() }]);
        }}
      />
    </div>
  );
}

export default App;
