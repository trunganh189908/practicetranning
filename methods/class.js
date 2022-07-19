class Car {
    constructor(name) {
      this.name = name
    }
    mode() {
      console.log(`${this.name} đang hát...`)
    }
  }
  class Mode extends Car {
    constructor(performane, date) {
      // Khởi tạo Car bên trong Mode
      // truyền name vào constuctor của Car
      super(performane)
      this.date = date
    }
    study() {
      console.log(`${this.date} và công xuất ${this.performane}`)
    }
  }
  const m6 = new Mode('BMW M6', 2022)
  // Mode kế thừa hàm mode() từ Car, nên duoc có thể gọi
  m6.mode()
  // duoc gọi hàm date(), bên trong study sử dụng "this.name",
  m6.date()