class UsersService{
  async register(){
    return {
      success: true,
      message: 'User register',
      accessToken: 'jfdhfjdsfd'
    }
  }
}

export default new UsersService();