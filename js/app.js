// Create new blank list variables
const createNewListBtn = document.querySelector('.new-list-btn');
const blankList = document.querySelector('.list-container');
const newList = blankList.cloneNode(true);

// delete list
const deleteList = document.querySelector('.delete-list-btn');

// Add items to list variable
const addBtn = document.querySelector('.addItemBtn');
const listInput = document.querySelector('input.userInput');
const ul = document.querySelector('ul');

// dropdown color selector menu 
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// color buttons and background color target
const backgroundColor = document.querySelector('.list-container');
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const tealBtn = document.querySelector('.teal');
const yellowBtn = document.querySelector('.yellow');
const orangeBtn = document.querySelector('.orange');

// ----------------------------------------------------

function newListFunc() {
  document.body.appendChild(newList);
  // blankList.style.display='inline-block';
}

function toggleMenu() {
  menu.classList.toggle('menu-toggle');
}

function createListElement() {
  let li = document.createElement('li'); // will create an <li> element
  li.appendChild(document.createTextNode(listInput.value)); // appending the new <li> element and adding user input 'text' to it
  ul.appendChild(li); // adds the new <li> element to the <ul> element
  listInput.value = ''; // clears the input field

  // function to highlight completed items in list
  function completedItem() {
    li.classList.toggle('crossOut'); // will 'toggle' the classes when <li> element is selected
  }

  li.addEventListener('click', completedItem); // listening for 'click' on <li> elements and run function completedItems if <li> element 'clicked'

  // delete button
  let deletebtn = document.createElement('button');
  deletebtn.appendChild(document.createTextNode('x')); //append deletebtn with text 'X'
  li.appendChild(deletebtn); // add the delete button to the <li> element
  deletebtn.addEventListener('click', deleteListItem); // delete <li> when delete button is clicked with function

  // function to delete list items
  function deleteListItem() {
    li.style.display='none'; // will add the '.add' class the the class list which has a 'display: none;' property
  }
}

// Function to create list element
function clickAddListItem() {
  let inputLength = listInput.value.length;
  if (inputLength > 0) {
    createListElement();
  }
}

// Event Listeners
menuBtn.addEventListener('click', toggleMenu);

deleteList.addEventListener('click', () => {
  blankList.style.display='none';
});

redBtn.addEventListener('click', () => {
  backgroundColor.style.background='lightcoral';
});

blueBtn.addEventListener('click', () => {
  backgroundColor.style.background='lightblue';
});

greenBtn.addEventListener('click', () => {
  backgroundColor.style.background='lightgreen';
});

tealBtn.addEventListener('click', () => {
  backgroundColor.style.background='lightseagreen';
});

yellowBtn.addEventListener('click', () => {
  backgroundColor.style.background='lightyellow';
});

orangeBtn.addEventListener('click', () => {
  backgroundColor.style.background='lightsalmon';
});

addBtn.addEventListener('click', clickAddListItem);

createNewListBtn.addEventListener('click', newListFunc);