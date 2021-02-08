'use strict';

// name
let userName = document.querySelector('.user-name');
const sendTime = document.querySelector('.ms-time');
const userForm = document.querySelector('.user-form');
const USER_LS = "currentUser",
    SHOWING_CN = "showing";
    
function changeName(){
    let msOne = document.querySelector('.message-one');
    msOne.classList.add('border-change');
}
setInterval(changeName,1600);

userForm.addEventListener('focusin', stopBlink);
function stopBlink(){
    let blink = document.querySelector('.blink');
    blink.classList.add('stopBlink');
}
function saveName(text){
    localStorage.setItem(USER_LS, text);
    goNextPage();
}
function handleSubmit(event){
    // event.preventDefault();
    const currentValue = userName.value;
    saveName(currentValue);
}
userForm.addEventListener('submit', goTodo);
function goTodo(){
    const currentValue = userName.value;
    if(currentValue != ""){
        handleSubmit();
    } else{
        alert('Please write down your name.')
    }
}
function goNextPage(){
    userForm.action= "todo/todo.html";
}

// time
function getSendTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    sendTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}
function init(){
    getSendTime()
    setInterval(getSendTime, 1000);
}
init();