const clockContainer = document.querySelector(".time"),
    clockDay = document.querySelector('.date');
    // clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const month = date.getMonth() + 1;
    const days = date.getDate();
    clockContainer.innerText = 
    `${hours < 10 ? `0${hourds}` : hours}:${minutes < 10 ? `0${minutes}` : minutes
    }`
    clockDay.innerText = `${month}월 ${days}일`
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
