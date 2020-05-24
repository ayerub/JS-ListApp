// // Create new blank list variables
const createNewListBtn = document.querySelector('.new-list-btn');
const body = document.querySelector('body');
const listContainer = document.querySelector('.list-container');

// delete list
const deleteList = document.querySelector('.delete-btn');

// Add items to list variable
const addBtn = document.querySelector('.add-item-btn');
const listInput = document.querySelector('input.user-input');
const ul = document.querySelector('ul');

// color buttons and background color target
const backgroundColor = document.querySelector('.list-container');
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
  buttonDeleteList.className='delete-btn';
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

  // create color container with color buttons
  const divColorContainer = document.createElement('div');
  divColorContainer.className='color-container';
  divContainer.appendChild(divColorContainer);
  const red = document.createElement('div');
  red.className='color-btn red'
  divColorContainer.appendChild(red);
  const blue = document.createElement('div');
  blue.className='color-btn blue'
  divColorContainer.appendChild(blue);
  const green = document.createElement('div');
  green.className='color-btn green'
  divColorContainer.appendChild(green);
  const teal = document.createElement('div');
  teal.className='color-btn teal'
  divColorContainer.appendChild(teal);
  const yellow = document.createElement('div');
  yellow.className='color-btn yellow'
  divColorContainer.appendChild(yellow);
  const orange = document.createElement('div');
  orange.className='color-btn orange'
  divColorContainer.appendChild(orange);
  const grey = document.createElement('div');
  grey.className='color-btn grey'
  divColorContainer.appendChild(grey);
}

// Create a new list - event listener
createNewListBtn.addEventListener('click', template);

let red = document.querySelector('.red');
red.addEventListener('click', () => {
  backgroundColor.style.background='lightcoral';
});
  
deleteList.addEventListener('click', () => {
  listContainer.style.display='none';
});

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
  let deleteBtn = document.createElement('button');
  deleteBtn.appendChild(document.createTextNode('x')); //append deletebtn with text 'X'
  li.appendChild(deleteBtn); // add the delete button to the <li> element
  deleteBtn.addEventListener('click', deleteListItem); // delete <li> when delete button is clicked with function

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



// redBtn.addEventListener('click', () => {
//   backgroundColor.style.background='lightcoral';
// });

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
  backgroundColor.style.background='rgb(185, 185, 185)';
});

addBtn.addEventListener('click', clickAddListItem);