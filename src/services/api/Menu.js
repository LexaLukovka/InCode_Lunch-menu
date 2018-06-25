/* eslint-disable class-methods-use-this */
import Http from '../Http'

class Menu {
  async all() {
    const result = await Http.get('/menu')
    return result
  }

  async addMenu() {
    await Http.post('/menu')
  }

  async addDishes() {
    await Http.post('/dishes')
  }
}

export default new Menu()
