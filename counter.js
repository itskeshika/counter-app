
function sleep(ms){
    return new Promise((resolve)=> setTimeout(resolve, ms));
}

const pharses = ["\" Keep Track of your time NOW\"" ,
"\"Time waits for no one\"",
"\"The two most powerful warriors are patience and time\"",
"\"Time is money\"",
"\"Time is the wisest counselor of all\"",
"\"Punctuality is the thief of time\"",
"\"The future is uncertain but the end is always near\"",
"\"Time is a storm in which we are all lost\""
]

const typeWriter = document.querySelector(".typewriter-effect");

let sleepTime = 100;

let curPharseIndex = 0;

const writeLoop = async() => {
    while(true){
        let curWord = pharses[curPharseIndex];

        for(let i=0; i < curWord.length; i++ ){
            typeWriter.innerText = curWord.substring(0, i + 1);
            await sleep (sleepTime);
        }
        
        await sleep(sleepTime * 10);

        for(let i=curWord.length; i > 0; i-- ){
            typeWriter.innerText = curWord.substring(0, i - 1);
            await sleep (sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPharseIndex === pharses.length-1) {
            curPharseIndex = 0;
        } else{
            curPharseIndex++;
        }
    }
};

writeLoop();

let displayTime = document.querySelector(".watch");

let start = document.querySelector(".start");

let stop = document.querySelector(".stop");

let reset = document.querySelector(".reset");


let secs = 00;
let mins = 00;
let hrs = 00;

let timerId = null;


start.addEventListener("click",function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,1000);
});

stop.addEventListener("click",function(){
    clearInterval(timerId);
});

reset.addEventListener("click",function(){
    clearInterval(timerId);
    displayTime.innerHTML = `00:00:00`
    secs = mins = hrs = 00;
});

function startTimer(){
    secs++;
    if(secs == 60){
        secs = 0;
        mins++;
        if(mins == 60){
            mins = 0;
            hrs++;
        }
    }

    let secString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hrsString = hrs < 10 ? `0${hrs}` : hrs;

    displayTime.innerHTML = `${hrsString}:${minsString}:${secString}`

}