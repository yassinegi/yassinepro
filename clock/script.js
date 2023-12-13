let shand=document.querySelector('.shand');
let mhand = document.querySelector('.mhand');
let hhand = document.querySelector('.hhand');


function setdate(){
    let now=new Date();

    let seconds=now.getSeconds();
    let secdegree=((seconds/60)*360) + 90;
    shand.style.transform = `rotate(${secdegree}deg)`;
    
    let min = now.getMinutes();
    let mindegree = ((min / 60) * 360) + 90;
    mhand.style.transform = `rotate(${mindegree}deg)`;

    let houres = now.getHours();
    let houresdegree = ((houres / 12) * 360) + 90;
    hhand.style.transform = `rotate(${houresdegree}deg)`;




}

setInterval(setdate,1000);