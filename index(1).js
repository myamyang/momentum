const clock = document.querySelector('.time');

function getTime(){
    const time = new Date();
    const hour = time.getHours(04);
    const minutes = time.getMinutes(31);
    const seconds = time.getSeconds(43);
    //clock.innerHTML = hour +":" + minutes + ":"+seconds;
    clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
}


function init(){
    setInterval(getTime, 1000);
}

init();