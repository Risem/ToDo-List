/* "Enter" key*/

document.getElementById('item').addEventListener("keyup",function (e) {
	var value = document.getElementById('item').value;
	var keyCode = (window.Event) ? e.which : e.keyCode;
	if (keyCode == 13) {
		if (value) {
			addNewTodo(value);
			document.getElementById('item').value = "";
		}
	}
});

/* "Lock" button */

var listTodo = document.querySelector('ul');
listTodo.addEventListener('click', function(e) {
	if (e.target.tagName === 'BUTTON') {
		e.target.classList.toggle('complete_off');
		e.target.parentNode.parentNode.classList.toggle('li_off');
	}
}, false);

/* Add text */

function addNewTodo(text) {
	var list = document.getElementById("todo");
	
	var item = document.createElement('li');
	item.innerText = text;
	
	var buttons = document.createElement('div');
	buttons.classList.add('buttons');
	
	var complete = document.createElement('button');
	complete.classList.add('complete_on');
	
	var remove = document.createElement('button');
	remove.classList.add('remove');
	
	buttons.appendChild(complete);
	buttons.appendChild(remove);
	item.appendChild(buttons);
	
	list.insertBefore(item, list.childNodes[0]);
	
	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var removItem = this.parentNode.parentNode;
			var parent = removItem.parentNode;
			parent.removeChild(removItem);
		}
	}
}

var close = document.getElementsByClassName('remove');

/* "Trash" button */

for (var i=0; i<close.length; i++) {
	close[i].onclick = function () {
		var removItem = this.parentNode.parentNode;
		var parent = removItem.parentNode;
		parent.removeChild(removItem);
	}
}