console.log('dom event');
// option: 1 directly set on the HTML element
// <button onclick="console.log(65)">Another Button</button>


// option: 2 and onclick function on the html element
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option: 3

const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option: 3 another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

// option: 4
const pinButton = document.getElementById('make-pink');
pinButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option: 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// option: 4 final
document.getElementById('make-goldenrod').addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'goldenrod';
})