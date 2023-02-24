const UserController = require('./controllers/UserController')

module.exports = [
  //Está listando todos os usuários cadastrados
  {
    endpoint: '/users',
    method: 'GET',
    hendler: UserController.listUsers,
  },
  //Filtra um usuário através do seu ID
  {
    endpoint: '/users/:id',
    method: 'GET',
    hendler: UserController.getUserById,
  },
  //Adiciona um usuário
  {
    endpoint: '/users',
    method: 'POST',
    hendler: UserController.createUser,
  },
  //Edita um usuário, pegando seu id e alterando as informações
  {
    endpoint: '/users/:id',
    method: 'PUT',
    hendler: UserController.updateUser,
  },
  //Deleta o usuário, removendo o id junto com o restante das informações
  {
    endpoint: '/users/:id',
    method: 'DELETE',
    hendler: UserController.deleteUser,
  },
]