const userTextField = document.querySelector('a');
userTextField.addEventListener('click', function (event) {
    this.textContent = prompt('Введите текст');
    event.preventDefault();
})