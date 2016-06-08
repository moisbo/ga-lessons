(function () {
    function init() {

        var index = 0;
        var createButton = document.getElementById('create');
        
        createButton.addEventListener('click', function () {
            var color =  document.getElementById('color').value;
            var note = document.getElementById('note').value;
            addBox(color, note);
        });
        
        var addBox = function (color, note) {
            index++;
            var container = document.getElementsByClassName('container')[0];
            container.appendChild(box(color, note));
        };
        
        var box = function (color, note) {
            var div = document.createElement('div');
            div.style.backgroundColor = color;
            div.setAttribute('class', 'box');
            var p = document.createElement('p');
            var msg = document.createTextNode(index + ": " + note);
            p.appendChild(msg);
            div.appendChild(p);
            return div;
        };
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        init();
    });
  })();