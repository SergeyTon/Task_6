let inputText = document.querySelector('input');
let paragrafText = document.querySelector('#duplicateField');
let button = document.querySelector('button');
inputText.addEventListener('input', function () {
    paragrafText.textContent = inputText.value;

})
button.addEventListener('click', function (event) {
    console.log(inputText.value);
    inputText.value = '';
    paragrafText.textContent = '';
    event.preventDefault();
})