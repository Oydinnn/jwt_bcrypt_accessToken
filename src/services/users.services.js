import pool from "../database/config.js"
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken'
class UsersService{

  async register(payload){
    const {username, email, password} = payload
    const existUser = await pool.query("SELECT * FROM users WHERE username = $1 or email = $2",
      [username,email])

    if(existUser.rows.length){
      return {
        status: 409,
        message: 'User already exists'
      }
    }

    const passHash = await bcrypt.hash(password, 10)
    const newUser = await pool.query('INSERT INTO users(username, email, password) values ($1, $2, $3) returning *',
      [username, email, passHash]
    )

    let id = newUser.rows[0].id
    return {

      success: true,
      message: 'User register',
      accessToken: Jwt.sign({id, username }, "shaftoli")
    }
  }

  async login(payload){
    const {username, password} = payload

    const existUsername = await pool.query("select * from users where username = $1",
      [username]
    )
    if(!existUsername.rows.length){
      return{
        status: 404,
        message: "username or password wrong"
      }
    }
    if(! await bcrypt.compare(password, existUsername.rows[0].password)){
       return{
        status: 404,
        message: "username or password wrong"
      }
    }

    return{
      status: 201,
      success: true,
      message: 'user succesfully login',
      accessToken: Jwt.sign({id:existUsername.rows[0].id, username:existUsername.rows[0].username }, "shaftoli")
    }
  }
}

export default new UsersService();