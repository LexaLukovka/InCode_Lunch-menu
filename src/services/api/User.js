/* eslint-disable class-methods-use-this,no-underscore-dangle */
import JWT from 'jwt-decode'
import Http from '../Http'
import Token from '../Token'
import Cache from '../Cache'

class User {
  async register(credentials) {
    const { token, refreshToken } = await Http.post('/signUp', credentials)
    Token.remember(token, refreshToken)

    // const user = JWT(token).data
    const user = JWT(token)._doc
    this.save(user)

    return user
  }

  getSaved() {
    return Cache.get('user')
  }

  save(user) {
    Cache.put('user', user)
  }

  async login(credentials) {
    if (!Cache.has('user') || !Cache.has('token')) {
      const { token, refreshToken } = await Http.post('/signIn', credentials)
      Token.remember(token, refreshToken)

      const user = JWT(token)._doc
      this.save(user)
    }
    return this.getSaved()
  }
  async verifyEmail(credentials) {
    if (!Cache.has('user') || !Cache.has('token')) {
      const { token, refreshToken } = await Http.post('/verifyEmail', credentials)
      Token.remember(token, refreshToken)

      const user = JWT(token)._doc
      this.save(user)
    }
    return this.getSaved()
  }

  // noinspection JSUnusedGlobalSymbols
  logout() {
    Cache.remove('user')
    Token.clear()
  }
}

export default new User()
