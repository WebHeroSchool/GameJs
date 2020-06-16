const body = document.body;
const button = document.querySelector('#btn');
const simple = document.querySelector('#simL');
const simpleGame = document.querySelector('#simple');
const medium = document.querySelector('#medG')
const mediumGame = document.querySelector('#medium')
const menu = document.querySelector('#menu')
const hard = document.querySelector('#hardG')
const hardGame = document.querySelector('#hard')
const bug = document.querySelectorAll('#bugover')




const simpleb = simple.onclick = function () {
     simple.classList.add('active');
	}

const mediumb = medium.onclick = function () {
	medium.classList.add('active');
}
const simpleBlur = simple.blur = function() {
	simple.classList.remove('active')
}


medium.blur = function () {
	medium.classList.remove('active');
}

hard.focus = function () {
	hard.classList.add('active');
}

hard.blur = function () {
	hard.classList.remove('active');
}

StartSimple = function () {
	button.onclick = () =>{
	menu.style.display = 'none';
	simpleGame.style.display = 'grid'
}
}

StartMedium = function () {
	button.onclick = () => {
	menu.style.display = 'none';
	mediumGame.style.display = 'grid'
}
}

StartHard = function () {
	button.onclick = () => {
	menu.style.display = 'none';
	hardGame.style.display = 'grid';
}
}

simple.addEventListener("mousedown", simple.focus)
simple.addEventListener("click", event => StartSimple())
simple.addEventListener("mousedown", medium.blur)
simple.addEventListener("mousedown", hard.blur)
medium.addEventListener("click", simple.blur, hard.blur)
medium.addEventListener("click", event => StartMedium())
medium.addEventListener("mousedown",hard.blur)
medium.addEventListener("mousedown", medium.focus);
hard.addEventListener("mousedown", simple.blur)
hard.addEventListener("mousedown", medium.blur)
hard.addEventListener("mousedown", hard.focus)
hard.addEventListener("click", event => StartHard())


const card = document.querySelectorAll('.item')

function flipCard() {

  this.classList.toggle('flip');
}

card.forEach(card => card.addEventListener('click', flipCard));
card.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 19);
    card.style.order = ramdomPos;
  });

bug.forEach(bug => bug.addEventListener('click',findBug))


function findBug() {
mediumGame.style.display = 'none'
	hardGame.style.display= 'none'
		simpleGame.style.display = 'none'
		menu.style.display = 'flex'

}
