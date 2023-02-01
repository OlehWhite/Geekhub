// №1
const input = document.querySelector('.input');
const p = document.querySelector('.p-default')

input.addEventListener('keydown', () => {
    p.className = 'p-default';
    p.innerHTML = input.value;
    setTimeout(() => {
        if (input.value.length === 0) p.className = 'p-default'
        else p.className = 'p-text'
    }, 1000);
})