/**
 * Composition over inheritance
The code is taken from Composition over inheritance.
https://www.youtube.com/watch?v=wfMtDGfHWpA
Exercise

Make the following enhancements:

Uber is a driver, and an app (with an .install() function)
DogSim2000 is an app and a barker (but not a pooper!)
Create instances, and trigger their functionality
driver's need fuel!
Add a showRemainingFuel() method
Add a refuel() method to top up
Change drive() to take away some fuel each time it is called
Test your changes out in node by running node index.js.
 */

'use strict';

const barker = (state) => {
  return {
    bark: () => { console.log(`Woof, I am ${state.name}`) }
  }
}
const pooper = (state) => {
  return {
    poop: () => { console.log(`💩`) }
  }
}
const driver = (state) => {
  return {
    drive: () => { state.position += state.speed },
    getName: () => {return state.name},
    getPosition: () => {return state.position}
  }
}
const dog = (name) => {
  let state = {
    name: name
  }
  return Object.assign({}, barker(state), pooper(state))
}
var fido = dog('Fido')
fido.bark()
// > 'Woof, I am Fido'

const app = (state) => {
    return {
        install: () => { console.log(`Installed App for ${state.name}`) }
    }
}
var Uber = (name) => {
    let state = {
        name: name, 
        position: 1,
        speed: 1
    }
    return Object.assign({}, driver(state), app(state))
}

var uber = Uber('uberdriver')
uber.install()
console.log(`${uber.getName()} has driven over ${uber.getPosition()}`)

var DogSim2000 = (name) =>{
    let state = {
        name:name
    }
    return Object.assign({}, app(state), barker(state))
}

var dogsim2000 = DogSim2000('dogsim2000')
dogsim2000.bark()
dogsim2000.install()