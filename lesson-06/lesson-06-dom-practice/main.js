/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#my-list" list.
- Only add an item if the input box is not blank.
- Clear the input box when the user clicks the button.

Here are some bonus tasks to push your DOM knowledge!
- Bonus tasks:
  - When a list item is archived, change its background colour to "green"
  - Add a link to each item to delete it completely
  - Instead of deleting it completely, move it to a second list called "Archive"

*/

(function(){
  var list = 0;

  function buttonClicked(event) {
    event.preventDefault();
    var val = document.getElementById('new-thing').value;
    if(val !== ''){
      addToList(document.querySelector('#my-list'), val, list++);
    }  
  }

  function addToList(list, text, id) {
    var li = document.createElement('li');
    li.style.backgroundColor = 'green';
    var a = document.createElement('a');
    li.setAttribute('class','list-thing');
    li.setAttribute('id', 'list-thing-'+id);    
    li.addEventListener('click', archiveClick);
    li.innerHTML = text;
    list.appendChild(li);
  }

  function archiveClick(event){
    event.preventDefault();
    var parent = document.getElementById('my-list');
    parent.removeChild(document.getElementById(event.target.id));
    addToList(document.querySelector('#archive-list'), event.target.innerHTML, list++);
  }

  var newThingButton = document.getElementById('new-thing-button');
  newThingButton.addEventListener('click', buttonClicked);

})();