import {MiniMaple} from './miniMaple.js'

const m = new MiniMaple()

document.addEventListener('DOMContentLoaded',setup)

function setup() {
    document.getElementById('demoButton').onclick = addSomething;
}

function addSomething(){
    const someDummyDiv = document.createElement('div');

    const e = document.getElementById('expr').value;
    const v = document.getElementById('variable').value;

    someDummyDiv.classList.add('generated');
    const count = document.getElementsByClassName('generated').length;
    someDummyDiv.innerHTML = m.differentiation(e, v);
    const container = document.getElementById('container');
    container.appendChild(someDummyDiv);
}