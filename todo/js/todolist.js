'use strict';

const addBtnInput = document.getElementById('addBtn-input');
const addBtn = document.getElementById('addBtn');
const toDoForm = document.querySelector('.todo-form');
const toDoInput = document.querySelector('.todo-note');
const todoWrap = document.querySelector('.todoList-wrap');
const sendBtn = document.querySelector('.todo-noteBtn');
let toDoCheckLabel = document.querySelector('.todoCheckLabel');
let toDoCheck = document.querySelector('.todoCheck');
const taskMenu = document.querySelector('.task-menu');

const TODOS_LS = 'toDos';
const TODOS_LSC = 'toDosC';

let toDos = [];
let idNumbers = 1;

let toDosC = [];
let idNumbersC = 1000;

function completeToDo(){
    const btn = event.target;
    const div = btn.parentNode;
    const divWrap = div.parentNode;
    const text = btn.innerText;
    const newId = idNumbersC;
    const loadedToDosC = localStorage.getItem(TODOS_LSC);

    // if(loadedToDosC !== null){
    //     const parsedToDos = JSON.parse(loadedToDosC);
    //     parsedToDos.forEach(function(toDo){
    //         // newId = toDo.id + 1000;
    //         // idNumbersC += 1000;  
    //         let idid = toDo.id + 1000;
    //         idid += 1000;
    //         divWrap.id = idid;
    //         const toDoObj = {
    //             text : text,
    //             id : idid
    //         }
    //         toDosC.push(toDoObj);
    //     })
    // }else{
        idNumbersC += 1000;
        divWrap.id = newId;
        const toDoObj = {
            text : text,
            id : newId
        }
        toDosC.push(toDoObj);
        deleteCompleted();
    // }
}

function deleteCompleted(){
    const btn = event.target;
    const div = btn.parentNode;
    const divWrap = div.parentNode;

    todoWrap.removeChild(divWrap);
    const reloadToDosC = toDosC.filter(function(toDoC){
        return parseInt(divWrap.id) > 999; 
    });
    const reloadToDos = toDos.filter(function(toDo){
        return (toDo.id * 1000) !== parseInt(divWrap.id);
    });

    toDos = reloadToDos;
    toDosC = reloadToDosC;
    saveToDos();
    saveToDosC();
}

function deleteToDo(text){
    const btn = event.target;
    const div = btn.parentNode;
    const divWrap = div.parentNode;
    const liWrap = divWrap.parentNode;
    todoWrap.removeChild(liWrap);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(liWrap.id);
    });
    toDos = cleanToDos
    saveToDos();
}


function deleteToDoC(text){
    const btn = event.target;
    const div = btn.parentNode;
    const divWrap = div.parentNode;
    const liWrap = divWrap.parentNode;
    todoWrap.removeChild(liWrap);
    const cleanToDos = toDosC.filter(function(toDo){
        return toDo.id !== parseInt(liWrap.id);
    });
    toDosC = cleanToDos
    saveToDosC();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function saveToDosC(){
    localStorage.setItem(TODOS_LSC, JSON.stringify(toDosC));
}

function paintToDo(text){
    const li = document.createElement('li');
    const div = document.createElement('div');
    const divText = document.createElement('div');
    const divBin = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    // const pTodoList = document.createElement('p');
    const h5 = document.createElement('h5');
    const spanBin = document.createElement('span');
    const newId = idNumbers;
    idNumbers += 1;

    // list
        todoWrap.appendChild(li);   
        const liWrap = todoWrap.appendChild(li);
        liWrap.classList.add('listActive');
        liWrap.appendChild(div);
        const divWrap = liWrap.appendChild(div);
        divWrap.classList.add('todoList-content');
        divWrap.appendChild(divText);
        divWrap.appendChild(divBin);
        const divTextWrap = divWrap.appendChild(divText);
        // divTextWrap.appendChild(input);
        // const divTextInput = divTextWrap.appendChild(input);
        // divTextInput.classList.add('todoCheck');
        // divTextWrap.appendChild(label);
        // const divTextLabel = divTextWrap.appendChild(label);
        // divTextLabel.classList.add('todoCheckLabel');
        divTextWrap.innerText = text;
        // divTextWrap.appendChild(pTodoList);
        // const todoText = divTextWrap.appendChild(pTodoList);
        // todoText.innerText = text;
        const divBinWrap = divWrap.appendChild(divBin);
        divBinWrap.classList.add('todo-bin');
        divBinWrap.appendChild(h5);
        const timeText = divBinWrap.appendChild(h5);
        timeText.innerText = "Time Left 00:00";
        divBinWrap.appendChild(spanBin);
        const divBinContent = divBinWrap.appendChild(spanBin);
        divBinContent.innerText = "delete_forever";
        divBinContent.classList.add('material-icons');
        divBinContent.addEventListener('click', deleteToDo);

        liWrap.id = newId;
        const toDoObj = {
            text : text,
            id : newId
        }
        toDos.push(toDoObj);
        saveToDos();

// complete
        // divTextWrap.addEventListener('click', function(){
        //     event.stopPropagation();
            // divTextLabel.classList.replace('todoCheckLabel', 'todoCheckLabelActive');
        //     completeToDo(text);
        // })
}

todoWrap.addEventListener('click', function(){
    // event.stopPropagation();
    // divTextLabel.classList.replace('todoCheckLabel', 'todoCheckLabelActive');
    completeToDo();
})

function paintToDoC(text){
    const li = document.createElement('li');
    const div = document.createElement('div');
    const divText = document.createElement('div');
    const divBin = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const h5 = document.createElement('h5');
    const spanBin = document.createElement('span');

    todoWrap.appendChild(li);   
    const liWrap = todoWrap.appendChild(li);
    liWrap.classList.add('listActive');
    liWrap.appendChild(div);
    const divWrap = liWrap.appendChild(div);
    divWrap.classList.add('todoList-content');
    divWrap.appendChild(divText);
    divWrap.appendChild(divBin);
    const divTextWrap = divWrap.appendChild(divText);
    divTextWrap.innerText = text;

    const divBinWrap = divWrap.appendChild(divBin);
    divBinWrap.classList.add('todo-bin');
    divBinWrap.appendChild(spanBin);
    const divBinContent = divBinWrap.appendChild(spanBin);
    divBinContent.innerText = "delete_forever";
    divBinContent.classList.add('material-icons');
    divBinContent.addEventListener('click', deleteToDoC);

    // const newId = idNumbersC;
    // idNumbersC += 1000;
    // liWrap.id = newId;
    // const toDoObj = {
    //     text : text,
    //     id : newId
    // }
    // toDosC.push(toDoObj);
    // saveToDos();
}

function paintToDoM(id, text){
    const li = document.createElement('li');
    const div = document.createElement('div');
    const divText = document.createElement('div');
    const divBin = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const h5 = document.createElement('h5');
    const spanBin = document.createElement('span');

    todoWrap.appendChild(li);   
    const liWrap = todoWrap.appendChild(li);
    liWrap.classList.add('listActive');
    liWrap.appendChild(div);
    const divWrap = liWrap.appendChild(div);
    divWrap.classList.add('todoList-content');
    divWrap.appendChild(divText);
    divWrap.appendChild(divBin);
    const divTextWrap = divWrap.appendChild(divText);
    divTextWrap.innerText = text;

    const divBinWrap = divWrap.appendChild(divBin);
    divBinWrap.classList.add('todo-bin');
    divBinWrap.appendChild(h5);
    const timeText = divBinWrap.appendChild(h5);
    timeText.innerText = "Time Left 00:00";
    divBinWrap.appendChild(spanBin);
    const divBinContent = divBinWrap.appendChild(spanBin);
    divBinContent.innerText = "delete_forever";
    divBinContent.classList.add('material-icons');
    divBinContent.addEventListener('click', deleteToDoC);

    liWrap.id = id;

}

taskMenu.addEventListener('click', function(e){
    const selected = e.target;
    menuSelect(taskMenu, selected);
    function menuSelect(menuUl, menuLi){
        Array.from(menuUl.children).forEach(
            e => e.classList.remove('menuFocus')
        )
        if(menuLi) menuLi.classList.add('menuFocus');
    }
});

function handleSubmit(e){
    e.preventDefault();
    const currentValue = toDoInput.value;
    if(currentValue != ""){
        paintToDo(currentValue);
        toDoInput.value = "";
        toDoForm.classList.add('scaleTrasnlate');
        addBtn.classList.remove('scaleZero');
    }else{
        alert('Please write something.')
    }
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text)
        })
    }
}

function loadToDosM(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            console.log(parsedToDos);
            paintToDoM(toDo.id, toDo.text)
        })
    }
}

function loadToDosC(){
    const loadedToDosC = localStorage.getItem(TODOS_LSC);
    if(loadedToDosC !== null){
        const parsedToDos = JSON.parse(loadedToDosC);
            parsedToDos.forEach(function(toDo){
                paintToDoC(toDo.text)
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}
init();

// button
addBtn.addEventListener('click', function(){
    addBtnInput.click();
    toDoForm.classList.toggle('scaleTrasnlate');
    addBtn.classList.add('scaleZero');
    toDoInput.focus();
});

const sendBtnChild = sendBtn.querySelector('.material-icons');
sendBtnChild.addEventListener('mouseover', function(){
    sendBtnChild.classList.add('todo-noteBtnHover');
    sendBtnChild.classList.remove('todo-noteBtnHoverT');
})
sendBtnChild.addEventListener('mouseout', function(){
    sendBtnChild.classList.remove('todo-noteBtnHover');
    sendBtnChild.classList.add('todo-noteBtnHoverT');
})

// menu
document.addEventListener('DOMContentLoaded', function(){
    const ongoing = document.querySelector('.ongoing');
    const overdue = document.querySelector('.overdue');
    const completed = document.querySelector('.completed');

    ongoing.classList.add('menuFocus');
    
    taskMenu.addEventListener('click', function(e){
        const selected = e.target;
        menuSelect(taskMenu, selected);
        function menuSelect(menuUl, menuLi){
            Array.from(menuUl.children).forEach(
                e => e.classList.remove('menuFocus')
            )
            if(menuLi) menuLi.classList.add('menuFocus');
        }
    });


    const toDoHides= document.getElementsByClassName('listHide');
    const toDoActives = document.getElementsByClassName('listActive');

    completed.addEventListener('click', function(){

        for(let i = todoWrap.children.length -1; i >= 0; i--){
            todoWrap.removeChild(toDoActives[i]);
            console.log(i);
        }
        addBtn.classList.add('listHide');
        loadToDosC();
    });

    ongoing.addEventListener('click', function(){
        // Array.from(toDoActives).forEach(function(toDoOngoing){
        //     toDoOngoing.classList.replace('listHide', 'listActive');
        // })
        for(let i = todoWrap.children.length -1; i >= 0; i--){
            todoWrap.removeChild(toDoActives[i]);
            console.log(i);
        }
        addBtn.classList.remove('listHide');
        loadToDosM();
    });

    overdue.addEventListener('click', function(){
        alert('준비중입니다.');
    });


}); 
