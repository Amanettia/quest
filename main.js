var root = document.querySelector('#root');

var button = '<button id="prime">button</button>'

root.innerHTML = button;

var prime = document.getElementById('prime');

// root.addEventListener('click',function ())


function car(carName) {
    prime.innerText = carName;
}

var defaultText = prime.innerText

var initialNumber = 0;

prime.addEventListener('click', function () {
    car(`${defaultText} ${initialNumber + 1}`)
    initialNumber = initialNumber + 1;
});



