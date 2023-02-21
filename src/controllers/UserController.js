const users = require('../mocks/users')

module.exports = {
  listUsers(request, responce){
    response.writeHead(200, { 'Content-type': 'application/json'})
    response.end(JSON.stringify(users))
  }
}