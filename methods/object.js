    // example object
    const car = {
        name: 'BMW',
        mode: 'X6',
        introduction(){
            console.log('introduction'+ this.name + this.mode)
        },
    }
    car.introduction()

    // funtion or object

    // object literal
    var person = {
    firstName: 'Du',
    lastName: 'Duoc',
    showName: function() {
      console.log(this.firstName + ' ' + this.lastName)
    },
  } 
  // Funtion
  function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.showName = function() {
      console.log(this.firstName + ' ' + this.lastName)
    }
  }
  var otherPerson = new Person('Du', 'Duoc') 
  
  // proto

  const user = {
    name: 'Duoc',
    age: 24,
    greet() {
      console.log('Hello, Toi ten la ' + this.name)
    },
    __proto__: {
      describe() {
        console.log('Toi ' + this.age + ' tuoi')
      },
    },
  }
  user.greet() // Hello, Toi ten la Duoc
  user.describe() // Toi 24 tuoi'

  
    // doc them sua xoa
    const person = {
    name: 'Duoc',
    }
    // đọc thuộc tính name
    person.name
    // thêm thuộc tính vào person
    person.ability = ['dance', 'sing']
    // sửa thuộc tính name
    person.name = 'Alan'
    // xóa thuộc tính name
    delete person.name
    
    // liên kết object lại với nhau
    const person = {
        name: 'TRUNGANH',
        ability: ['Sale'],
      }
    const person2 = Object.assign(person, { ability: ['dance', 'sing'] })
    console.log(person2)
    
    const person3 = { ...person, ability2: ['poker', 'bia'] }
    console.log(person2)
    
    // object key
    const greenwich = {
        object : 'IT',
        object2 : 'Business',
        object3 :  'Graphic Design',
    }

    console.log(Object.keys(greenwich));

    // object value
    const person = {
        name: { firstName: 'trung', lastName: 'anh' },
        age: 23,
      }
      console.log(Object.values(person)) 


   