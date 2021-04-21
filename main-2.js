var root = document.querySelector('#root');


function search(name, event, handler) {
    let elem = document.querySelector(name);
    return elem
}

const elem = search('#root23')

function color(name, color) {
    name.style.color = color;
}

function backgroundColor(name, color) {
    name.style.backgroundColor = color;
}

function text(name, text) {
    name.innerText = text;
}

function style(name, color, back, text) {
    name.style.color = color;
    name.style.backgroundColor = back;
    name.innerText = text;
}

let switcher = true;


let defaultText = elem.innerText;
let defaultColor = elem.style.color;
let defaultBackground = elem.style.backgroundColor;

/*
elem.addEventListener('click', function () {
    if (switcher === true) {
        style(this, 'red', 'black', 'hello');
        switcher = false;
    } else {
        style(this, defaultColor, defaultBackground, defaultText)
        switcher = true;
    }
})
*/

function searching(name,event,handler){
    let elem = document.querySelector(name);
    elem.addEventListener(event, handler)
}

searching('#root23', 'click', function(){
    if (switcher === true) {
        style(this, 'red', 'black', 'hello');
        switcher = false;
    } else {
        style(this, defaultColor, defaultBackground, defaultText)
        switcher = true;
    }
})
