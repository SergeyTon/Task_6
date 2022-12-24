const trafficLightEl = document.querySelector('#trafficLightE1');
const trafficLightE2 = document.querySelector('#trafficLightE2');
const trafficLightE3 = document.querySelector('#trafficLightE3');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeBlack1);

}

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeRed);
    trafficLightE2.addEventListener('click', makeBlack2);
}

function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeGreen);
    trafficLightE3.addEventListener('click', makeBlack3);
}

function makeBlack1() {
    trafficLightEl.style.background = ('black');
    trafficLightE3.style.background = ('black');

}

function makeBlack2() {
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('black');
}

function makeBlack3() {
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');

}
trafficLightEl.addEventListener('click', makeGreen);
trafficLightE2.addEventListener('click', makeYellow);
trafficLightE3.addEventListener('click', makeRed);