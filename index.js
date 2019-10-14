var h3 = document.querySelector('h3');
var nameInput = document.getElementById('name');
var greetMeButton = document.querySelector('.greet-me');

greetMeButton.addEventListener('click', function() {
 var name = nameInput.value;
 document.querySelector('h3').innerText = (`Hi, ${name}!`);
});
