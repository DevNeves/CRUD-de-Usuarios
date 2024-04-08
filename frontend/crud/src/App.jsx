import './App.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [users, setUsers] = useState([]);
  const [toEdit, setToEdit] = useState(null);

  const getUsers = async () => {
    try {
      const response = await axios('http://localhost:4040');

      if (!response) {
        return;
      }

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <div className="crud-app-container">
      <h1>Cadastro</h1>
      <Form toEdit={toEdit} setToEdit={setToEdit} getUsers={getUsers} />
      <Table users={users} setUsers={setUsers} setToEdit={setToEdit} />
    </div>
  );
}

export default App;
