// Create new blank list variables
const createNewListBtn = document.querySelector('.new-list-btn');
const body = document.querySelector('body');
const blankList = document.querySelector('.list-container');
const newList = blankList.cloneNode(true);

// delete list
const deleteList = document.querySelector('.delete');

// Add items to list variable
const addBtn = document.querySelector('.add-item-btn');
const listInput = document.querySelector('input.user-input');
const ul = document.querySelector('ul');

// color buttons and background color target
const backgroundColor = document.querySelector('.list-container');
const fontColor = document.querySelector('li');
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const tealBtn = document.querySelector('.teal');
const yellowBtn = document.querySelector('.yellow');
const orangeBtn = document.querySelector('.orange');
const greyBtn = document.querySelector('.grey');

// ----------------------------------------------------

function template() {
  // create <div> container for list to hold all elements
  const divContainer = document.createElement('div');
  divContainer.className='list-container';
  body.appendChild(divContainer);

  // create <div> to hold heading input
  const divInputContainer = document.createElement('div');
  divInputContainer.className='input-container';
  divContainer.appendChild(divInputContainer);
  const inputTitle = document.createElement('input');
  inputTitle.type='text';
  inputTitle.placeholder='List Title';
  inputTitle.className='list-heading';
  divInputContainer.appendChild(inputTitle);

  // create delete list button
  const buttonDeleteList = document.createElement('button');
  buttonDeleteList.textContent='x';
  buttonDeleteList.className='delete';
  divInputContainer.appendChild(buttonDeleteList);

  // create <ul>
  const ul = document.createElement('ul');
  ul.className='list';
  divContainer.appendChild(ul);

  // create <div> input container to hold <li> elements and remove button
  const divItemInputContainer = document.createElement('div');
  divItemInputContainer.className='input-container';
  divContainer.appendChild(divItemInputContainer);
  const inputListItem = document.createElement('input');
  inputListItem.type='text';
  inputListItem.placeholder='list item';
  inputListItem.className='user-input';
  divItemInputContainer.appendChild(inputListItem);

  // create add item button
  const buttonAddListItem = document.createElement('button');
  buttonAddListItem.textContent='+';
  buttonAddListItem.className='add-item-btn'
  divItemInputContainer.appendChild(buttonAddListItem);
}

createNewListBtn.addEventListener('click', template);

function newListFunc() {
  body.appendChild(newList); // will append a new list container to the body variable
  // blankList.style.display='flex';
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
  backgroundColor.style.background='rgb(207, 207, 12)';
});

orangeBtn.addEventListener('click', () => {
  backgroundColor.style.background='lightsalmon';
});

greyBtn.addEventListener('click', () => {
  backgroundColor.style.background='rgb(86, 86, 86)';
  fontColor.style.color='white';
});

addBtn.addEventListener('click', clickAddListItem);

// createNewListBtn.addEventListener('click', newListFunc);