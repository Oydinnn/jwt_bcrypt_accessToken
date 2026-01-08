import express from 'express'
import {config} from 'dotenv'
import userRouter from './routes/users.routers.js'
config()

const app = express()
app.use(express.json())
app.use(userRouter)
app.listen(process.env.PORT, ()=> console.log('server is running on port:', process.env.PORT))