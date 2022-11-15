// №1
const input = document.querySelector('.input');
const p = document.querySelector('.p-default')

input.addEventListener('keydown', () => {
    p.className = 'p-text';
    p.innerHTML = input.value;
    if (input.value.length === 0) p.className = 'p-default'
    setTimeout(() => p.className = 'p-default', 1000);
})