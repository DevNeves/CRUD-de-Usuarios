import axios from 'axios';

const Table = ({ users, setUsers, setToEdit }) => {
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:4040/${id}`)
      .then(() => {
        const newUsers = users.filter((user) => user.id !== id);

        setUsers(newUsers);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = async (user) => {
    setToEdit(user);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Data de Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>{user.fone}</td>
              <td>{user.data_nascimento}</td>
              <td>
                <button onClick={() => handleEdit(user)} className="editar">
                  Editar
                </button>
                <button onClick={() => handleDelete(user.id)} className="excluir">
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
