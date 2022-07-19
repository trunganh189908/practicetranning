//get and set
class Human {
    constructor(name) {
      this._name = name
    }
    get name() {
      return this._name.toUpperCase()
    }
    set name(newName) {
      this._name = newName
    }
  }
  const duoc = new Human('Duoc')
  duoc.name = 'Alan'
  console.log(duoc.name) // ALAN