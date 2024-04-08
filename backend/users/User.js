const connection = require('../database/database');

const getUsers = (req, res) => {
  const query = 'SELECT * FROM usuarios';

  connection.query(query, (error, data) => {
    if (error) {
      return res.json(error);
    }

    return res.status(200).json(data);
  });
};

const addUser = (req, res) => {
  const query = 'INSERT INTO usuarios (`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)';

  const values = [req.body.nome, req.body.email, req.body.fone, req.body.data_nascimento];

  connection.query(query, [values], (error) => {
    if (error) {
      return res.json(error);
    }

    return res.status(200).json('Usuario Criado');
  });
};

const updateUser = (req, res) => {
  const query =
    'UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?';

  const values = [req.body.nome, req.body.email, req.body.fone, req.body.data_nascimento];

  connection.query(query, [...values, req.params.id], (error) => {
    if (error) {
      return res.json(error);
    }

    return res.status(200).json('Usuario atualizado');
  });
};

const deleteUser = (req, res) => {
  const query = 'DELETE FROM usuarios WHERE `id` = ?';

  connection.query(query, [req.params.id], (error) => {
    if (error) {
      return res.json(error);
    }

    return res.status(200).json('Usuario deletado');
  });
};

module.exports = { getUsers, addUser, updateUser, deleteUser };
