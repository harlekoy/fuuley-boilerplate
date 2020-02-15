import JwtDecode from 'jwt-decode'

export default class Token {
  static from (token) {
    try {
      let obj = JwtDecode(token)
      return obj
    } catch (_) {
      return null
    }
  }
}
