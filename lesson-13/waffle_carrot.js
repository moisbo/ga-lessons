/*
In node, add 2 new properties to each new food (`waffle` & `carrot`):
 1. `tasty` which is unique to each instance
 2. `properties`, an array, which is the same for all instances
*/

const food = {
  init: function(type) {
    this.type = type
    this.tasty = true
  },
  eat: function() {
    console.log(`you ate the ${this.type}`)
  },
  getTasty: function() {
    console.log(`tasty ${this.type 
      }is ${this.tasty}`)
  }
}
const waffle = Object.create(food)
waffle.init('waffle')

const carrot = Object.create(food)
carrot.init('carrot')

carrot.tasty = false

food.properties = ['i like it', 'i hate it']

console.log(carrot, carrot.properties)

console.log(waffle, waffle.properties)

carrot.eat()
carrot.getTasty()