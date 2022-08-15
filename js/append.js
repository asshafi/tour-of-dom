// console.log('append js')
// // 1.where to add
// const placesList = document.getElementById('places-list')
// // console.log(placesList);
// // 2.what to be added
// const li = document.createElement('li');
// li.innerText = 'dhaka';

// // 3.add the child
// placesList.appendChild(li);


// 1.what to add
const mainContainer = document.getElementById('main-container');

// 2.where to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement(li);
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement(li);
li2.innerText = 'beef';
ul.appendChild(li2);

const li3 = document.createElement(li);
li3.innerText = 'saladf';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);