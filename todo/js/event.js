const hamburger = document.querySelector('.todo-hamburger');
const span = hamburger.querySelector('span');
const menu = document.querySelector('.todo-menu');
const list = document.querySelector('.todo-list');


hamburger.addEventListener('click', function(){
    // let menuClose =  span.innerText;
    if(span.innerText == "menu"){
        span.innerText = "close";
        list.style = "grid-column: unset";
        menu.style = "transform: translateX(0%)";
    } else if(span.innerText == "close"){
        span.innerText = "menu";
        list.style = "grid-column: 1/3";
        menu.style = "transform: translateX(-100%)";
    }
})