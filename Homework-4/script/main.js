const containerTask = document.querySelector('.container-task');
const createTask = document.querySelector('input');
const buttonAdd = document.querySelector('.button');
const buttonSortByTime = document.querySelector('.btn-sort-time');
const buttonSortByAlphabet = document.querySelector('.btn-sort_A-Z');
let toDoList = [];

buttonAdd.addEventListener('click', () => {
    const content = createTask.value
    const data = new Date().toLocaleString()
    addToDo(content, data);  // створили таксу
    dragAndDrop(document.querySelector('.container-task'))
    createTask.value = '';   // прибрали все з інпута після створення таски
})

const addToDo = (content, data) => {
    const li = document.createElement('li');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const p = document.createElement('p');
    const time = document.createElement('time');
    const buttonDel = document.createElement('button');
    const buttonDone = document.createElement('button');

    if (createTask.value === '') return    // Якщо інпут пустий, то не створювати таску

    const randomId = (Math.random() * 123.45).toFixed(2);
    buttonDone.id = randomId
    buttonDel.id = randomId
    p.id = randomId
    const objId = randomId

    time.textContent = data;
    p.textContent = content;

    buttonDel.textContent = 'Del';
    buttonDone.textContent = 'Done';

    li.id = 'drag';
    li.className = 'div-task';
    div1.className = 'div-time';
    div2.className = 'task-btn_btn';
    p.className = 'p-task';
    time.className = 'time-task'
    buttonDel.className = 'btn-task';
    buttonDone.className = 'btn-done';

    li.setAttribute('draggable', 'true')

    li.append(div1, div2);
    div1.prepend(p, time);
    div2.prepend(buttonDone, buttonDel);

    containerTask.prepend(li);

    const createItemObj = (arr) => {
        const itemObj = {};
        itemObj.name = createTask.value;
        itemObj.id = objId;
        itemObj.time = time.textContent;
        itemObj.done = false;

        arr.push(itemObj);
    }

    createItemObj(toDoList)

    ButtonDoneAndDel(li, div2, p, buttonDel, buttonDone);
    redactTask(p)
}

function redactTask(p) {
    let paragraph = document.querySelectorAll('.p-task')

    for (const paragraphElement of paragraph) {
        paragraphElement.addEventListener('dblclick', function () {
        let text = this.textContent;
        this.textContent = '';

        let edit = document.createElement('input');
        edit.className = 'container-input'
        edit.value = text;
        this.appendChild(edit);

        let self = this;
        edit.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                self.textContent = this.value;
                for (let i = 0; i < toDoList.length; i++) {
                    if (p.id === toDoList[i].id) {
                        toDoList[i].name = this.value
                    }
                }
            }
        });
        });
    }
}

function ButtonDoneAndDel(li, div2, p, buttonDel, buttonDone) {
    buttonDone.addEventListener('click', () => {
        for (let i = 0; i < toDoList.length; i++) {
            if (buttonDone.id === toDoList[i].id) {
                toDoList[i].done = true
            }
        }

        // Змінюю стилі кнопки "DONE"
        li.className = 'div-task-done';
        p.className = 'p-task-done';
        p.setAttribute('contenteditable', 'false');
        buttonDone.className = 'btn-done-silver';
    })

    buttonDel.addEventListener('click', () => {
        for (let i = 0; i < toDoList.length; i++) {
            if (buttonDel.id === toDoList[i].id) {
                toDoList.splice(i, 1);
                li.remove();
            }
        }
    });
}

const sortByAlphabetAndData = (time, data, id, done) => {
    const newLi = document.createElement('li');
    const newDiv1 = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newP = document.createElement('p');
    const newTime = document.createElement('time');
    const newButtonDel = document.createElement('button');
    const newButtonDone = document.createElement('button');

    newButtonDel.id = id
    newButtonDone.id = id
    newP.id = id
    newTime.textContent = time;
    newP.textContent = data;

    newButtonDel.textContent = 'Del';
    newButtonDone.textContent = 'Done';

    if (done) {
        newLi.className = 'div-task-done';
        newP.className = 'p-task-done';
        newButtonDone.className = 'btn-done-silver';
    } else {
        newLi.className = 'div-task';
        newP.className = 'p-task';
        newButtonDone.className = 'btn-done';
    }

    newLi.id = 'drag';
    newDiv1.className = 'div-time';
    newDiv2.className = 'task-btn_btn';
    newTime.className = 'time-task'
    newButtonDel.className = 'btn-task';

    newLi.setAttribute('draggable', 'true')

    containerTask.append(newLi);
    newLi.append(newDiv1, newDiv2);
    newDiv1.prepend(newP, newTime);

    newDiv2.prepend(newButtonDone, newButtonDel);
    ButtonDoneAndDel(newLi, newDiv2, newP, newButtonDel, newButtonDone);
    dragAndDrop(document.querySelector('.container-task'))
    redactTask(newP)
}

const ButtonSortAZ = () => {
    buttonSortByAlphabet.addEventListener('click', () => {
        toDoList.sort((a, b) => a.name > b.name ? 1 : -1)

        containerTask.innerHTML = ''

        for (let i = 0; i < toDoList.length; i++) {
            sortByAlphabetAndData(toDoList[i].time, toDoList[i].name, toDoList[i].id, toDoList[i].done)
        }
    })
}
ButtonSortAZ()

const ButtonSortTime = () => {
    buttonSortByTime.addEventListener('click', () => {
        toDoList.sort((a, b) => a.time > b.time ? 1 : -1)

        containerTask.innerHTML = ''

        for (let i = 0; i < toDoList.length; i++) {
            sortByAlphabetAndData(toDoList[i].time, toDoList[i].name, toDoList[i].id, toDoList[i].done)
        }
    })
}
ButtonSortTime();

function dragAndDrop(target) {
    target.classList.add('slist');
    let items = target.getElementsByTagName('li'), current = null;
    for (let i of items) {
        i.draggable = true;
        i.ondragstart = () => {
            current = i;
            for (let it of items) {
                if (it !== current) it.classList.add('hint');
            }
        };
        i.ondragenter = () => {
            if (i !== current)  i.classList.add('active');
        };
        i.ondragleave = () => {
            i.classList.remove('active');
        };
        i.ondragend = () => {
            for (let it of items) {
                it.classList.remove('hint');
                it.classList.remove('active');
            }
        };
        i.ondragover = (evt) => evt.preventDefault();
        i.ondrop = (evt) => {
            evt.preventDefault();
            if (i !== current) {
                let currentpos = 0, droppedpos = 0;
                for (let it = 0; it < items.length; it++) {
                    if (current === items[it]) currentpos = it;
                    if (i === items[it]) droppedpos = it;
                }
                if (currentpos < droppedpos) {
                    i.parentNode.insertBefore(current, i.nextSibling);
                } else {
                    i.parentNode.insertBefore(current, i);
                }
            }
        };
    }
}