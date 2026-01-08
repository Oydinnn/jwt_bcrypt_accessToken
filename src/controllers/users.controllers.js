import usersServices from "../services/users.services.js"
class UserController{
  constructor(){}

  async register (req, res){
    const data = await usersServices.register()
    res.send('ishladi')
  }
}

export default new UserController()