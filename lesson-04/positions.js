'use strict';

function addToQueue(names, queueLength){
  var positions = [];
  for (let i = 0; i < names.length; i++) {
    (function (index) {
      positions[index] = function() {      
          return queueLength + index + 1;
      };
    })(i);
  }
  return positions;
}

var people = ['Ash', 'Kelly'];
var queuePositions = addToQueue(people, 10);

console.log(queuePositions[0]()); // 13?! Should be 11
console.log(queuePositions[1]()); // 13 As well!