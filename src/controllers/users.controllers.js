import usersServices from "../services/users.services.js"
class UserController{
  constructor(){}

  async register (req, res){
    const data = await usersServices.register(req.body)
    res.status(data.status).json(data)

  }

  async login (req, res){
    const data = await usersServices.login(req.body)
    res.status(data.status).json(data)
  }
}

export default new UserController()