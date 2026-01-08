import validationUtils from "../utils/validation.utils.js"

export default(req, res, next) =>{
  if(req.url = '/register'){
    const {error, value} = validationUtils.registerSchema.validate(req.body)
    if(error){
      return res.status(400).json({
        status: 400,
        message: error.details[0].message
      })
    }
  }
  return next()
}