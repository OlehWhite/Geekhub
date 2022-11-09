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
    createTask.value = '';   // прибрали все з інпута після створення таски
})

const addToDo = (content, data) => {
    const div = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const p = document.createElement('p');
    const time = document.createElement('time');
    const buttonDel = document.createElement('button');
    const buttonDone = document.createElement('button');
    const randomId = (Math.random() * 123.45).toFixed(2);
    const objId = randomId

    if (createTask.value === '') return    // Якщо інпут пустий, то не створювати таску

    buttonDone.id = randomId
    buttonDel.id = randomId

    time.textContent = data;
    p.textContent = content;

    buttonDel.textContent = 'Del';
    buttonDone.textContent = 'Done';

    div.className = 'div-task';
    div1.className = 'div-time';
    div2.className = 'task-btn_btn';
    p.className = 'p-task';
    time.className = 'time-task'
    buttonDel.className = 'btn-task';
    buttonDone.className = 'btn-done';

    div.setAttribute('draggable', 'true')
    p.setAttribute('contenteditable', 'true');

    containerTask.prepend(div);

    div.append(div1, div2);
    div1.prepend(p, time);
    div2.prepend(buttonDone, buttonDel);

    const createItemObj = (arr) => {
        const itemObj = {};
        itemObj.name = createTask.value;
        itemObj.id = objId;
        itemObj.id2 = buttonDel.id
        itemObj.time = time.textContent;
        itemObj.done = false;

        arr.push(itemObj);
    }

    createItemObj(toDoList)

    ButtonDoneAndDel(div, div2, p, buttonDel, buttonDone);
    dragAndDrop();
}

function ButtonDoneAndDel(div, div2, p, buttonDel, buttonDone) {
    buttonDone.addEventListener('click', () => {

        // Записую чи зроблена таска, чи ні
        for (let i = 0; i < toDoList.length; i++) {
            if (buttonDone.id === toDoList[i].id) {
                toDoList[i].done = true
            }
        }

        // Змінюю стилі кнопки "DONE"
        div.className = 'div-task-done';
        p.className = 'p-task-done';
        p.setAttribute('contenteditable', 'false');
        buttonDone.className = 'btn-done-silver';
    })

    // Видалення такси на сторінці та в об'єкті по ID
    buttonDel.addEventListener('click', () => {
        for (let i = 0; i < toDoList.length; i++) {
            console.log(2)
            if (buttonDel.id === toDoList[i].id) {
                toDoList.splice(i, 1);
                div.remove();
            }
        }
    });
}

const sortByAlphabetAndData = (time, data, id, done) => {
    const newDiv = document.createElement('div');
    const newDiv1 = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newP = document.createElement('p');
    const newTime = document.createElement('time');
    const newButtonDel = document.createElement('button');
    const newButtonDone = document.createElement('button');

    newButtonDel.id = id
    newButtonDone.id = id

    newTime.textContent = time;
    newP.textContent = data;

    newButtonDel.textContent = 'Del';
    newButtonDone.textContent = 'Done';

    if (done) {
        newDiv.className = 'div-task-done';
        newP.className = 'p-task-done';
        newP.setAttribute('contenteditable', 'false');
        newButtonDone.className = 'btn-done-silver';
    } else {
        newDiv.className = 'div-task';
        newP.className = 'p-task';
        newButtonDone.className = 'btn-done';
        newP.setAttribute('contenteditable', 'true');
    }

    newDiv1.className = 'div-time';
    newDiv2.className = 'task-btn_btn';
    newTime.className = 'time-task'
    newButtonDel.className = 'btn-task';

    newDiv.setAttribute('draggable', 'true')

    containerTask.append(newDiv);

    newDiv.append(newDiv1, newDiv2);
    newDiv1.prepend(newP, newTime);
    newDiv2.prepend(newButtonDone, newButtonDel);

    ButtonDoneAndDel(newDiv, newDiv2, newP, newButtonDel, newButtonDone);
    dragAndDrop();
    ButtonSortAZ()
    ButtonSortTime()
}

const ButtonSortAZ = () => {
    buttonSortByAlphabet.addEventListener('click', () => {
        for (let i = 0; i < toDoList.length; i++) {
            toDoList.sort((a, b) => {
                return a.name > b.name ? 1 : -1
            })
        }

        // Видаляю все на сторінці
        containerTask.innerHTML = ''

        // Створюю нові відсортовані таски
        for (let i = 0; i < toDoList.length; i++) {
            sortByAlphabetAndData(toDoList[i].time, toDoList[i].name, toDoList[i].id, toDoList[i].done)
        }
    })
}

function ButtonSortTime() {
    buttonSortByTime.addEventListener('click', () => {
        // Сотрую алфавіту
        for (let i = 0; i < toDoList.length; i++) {
            toDoList.sort((a, b) => {
                return new Date (a.time) - new Date (b.time)
            })
        }
        // Видаляю все на сторінці
        containerTask.innerHTML = ''

        // Створюю нові відсортовані таски
        for (let i = 0; i < toDoList.length; i++) {
            sortByAlphabetAndData(toDoList[i].time, toDoList[i].name, toDoList[i].id, toDoList[i].done)
        }
        })
}

function dragAndDrop(task) {
        let tasks = task
         tasks = document.querySelectorAll('.div-task');
        let dragged = null;

        for (const i of tasks) {
            i.addEventListener('dragstart', function () {
                dragged = this;
                for (const it of tasks) {
                    if (it !== dragged) it.classList.add('hint')
                }
            })

            i.addEventListener('dragenter', function () {
                if (this !== dragged) this.classList.add('active')
            })

            i.addEventListener('dragleave', function () {
                this.classList.remove('active')
            })

            i.addEventListener('dragEnd', function () {
                for (const it of tasks) {
                    it.classList.remove('hint')
                    it.classList.remove('active')
                }
            })

            i.addEventListener('dragover', function (evt) {
                evt.preventDefault()
            })

            i.addEventListener('drop', function (evt) {
                evt.preventDefault()
                if (this !== dragged) {
                    let all = document.querySelectorAll('.div-task'),
                        draggedpos = 0, droppedpos = 0;
                    for (let it = 0; it < all.length; it++) {
                        if (dragged === all[it]) draggedpos = it
                        if (this === all[it]) droppedpos = it
                    }

                    if (draggedpos < droppedpos) {
                        this.parentNode.insertBefore(dragged, this.nextSibling)
                    } else {
                        this.parentNode.insertBefore(dragged, this)
                    }
                }
            })
        }
}
