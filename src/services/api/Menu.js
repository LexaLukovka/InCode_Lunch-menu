/* eslint-disable class-methods-use-this */
import Http from '../Http'

class Menu {
  async all() {
    const result = await Http.get('/menu')
    return result
  }
}

export default new Menu()
