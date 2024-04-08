import { useEffect, useRef } from 'react';
import axios from 'axios';

const Form = ({ toEdit, setToEdit, getUsers }) => {
  const ref = useRef();

  useEffect(() => {
    if (toEdit) {
      const user = ref.current;

      user.nome.value = toEdit.nome;
      user.email.value = toEdit.email;
      user.fone.value = toEdit.fone;
      user.data_nascimento.value = toEdit.data_nascimento;
    }
  }, [toEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault(e);

    const user = ref.current;

    if (toEdit) {
      await axios.put(`http://localhost:4040/${toEdit.id}`, {
        nome: user.nome.value,
        email: user.email.value,
        fone: user.fone.value,
        data_nascimento: user.data_nascimento.value,
      });
    } else {
      await axios.post('http://localhost:4040', {
        nome: user.nome.value,
        email: user.email.value,
        fone: user.fone.value,
        data_nascimento: user.data_nascimento.value,
      });
    }

    user.nome.value = '';
    user.email.value = '';
    user.fone.value = '';
    user.data_nascimento.value = '';

    setToEdit(null);
    getUsers();
  };

  return (
    <div className="formCadastro-container">
      <form ref={ref} onSubmit={handleSubmit}>
        <label className="input-area">
          <label>Nome</label>
          <input type="text" name="nome" required />
        </label>
        <label className="input-area">
          <label>Email</label>
          <input type="email" name="email" required />
        </label>
        <label className="input-area">
          <label>Telefone</label>
          <input type="tel" name="fone" required />
        </label>
        <label className="input-area">
          <label>Data de Nascimento</label>
          <input type="date" name="data_nascimento" required />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Form;
