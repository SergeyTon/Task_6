const consoleLog = document.querySelector('#consoleLog')
consoleLog.addEventListener('click', () => {
    alert('Служит для вывода сообщений в консоль браузера.');
})
const alertLink = document.querySelector('#alert')
alertLink.addEventListener('click', () => {
    alert('Служит для вывода диалогового окна с кнопкой ОК');
})
const promptLink = document.querySelector('#prompt')
promptLink.addEventListener('click', () => {
    alert('Служит для вывода диалогового окна с запросом на ввод текста.');
})