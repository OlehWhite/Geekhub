const createTask = document.querySelector('input');
const buttonAdd = document.querySelector('.button')
const containerTask = document.querySelector('.container-task')

// buttonAdd.addEventListener('click', addToDo)

const addToDo = () => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const input = document.createElement('input');
    const button = document.createElement('button');

    button.innerHTML = 'Del'
    p.innerHTML = 'Погулять із собакою'

    div.className = 'div-task'
    p.className = 'p-task'
    button.className = 'btn-task'

    input.setAttribute('type', 'checkbox')

    containerTask.prepend(div)
    div.prepend(p)
    div.prepend(input)
    div.append(button)

    return {
        div,
        input,
        p,
        button
    }
}

addToDo()