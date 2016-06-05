/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.


diceRoll:
    random1 <= random([1-6])
    random2 <= random([1-6])

    firstDie <= 'dice-1' + random1
    secondDie <= 'dice-2' + random2

    firstElement <= document.getElementById('firstDie')  
    secondElement <= document.getElementById('secondDie')

roll <= docuent.getElementById('roll-dice')

roll.onClick ->
  diceRoll()
 
2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random1 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

var random = () => Math.floor(Math.random() * (7-1)) + 1;

var firstElement = document.getElementById('first-die');
var secondElement = document.getElementById('second-die');
    
var diceRoll = function () {
    
    var random1 = random();
    var random2 = random();

    var firstDie = 'dice-' + random1;
    var secondDie = 'dice-' + random2;

    firstElement.setAttribute('class', firstDie);
    secondElement.setAttribute('class', secondDie);
};

document
    .getElementById('roll-dice')
    .addEventListener("click", diceRoll);
  