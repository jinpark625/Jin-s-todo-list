const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

// function filterFn(toDo){
//     return toDo.id === 1
// }

let toDos = [];
let idNumbers = 1;

function deleteToDo(text){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = idNumbers;
    idNumbers += 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(e){
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedTODos = JSON.parse(loadedToDos);
        parsedTODos.forEach(function(toDo){
            paintToDo(toDo.text)
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();
