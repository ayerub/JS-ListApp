const listContainer = document.querySelector('.list-container');

// Add items to list variable
const addBtn = document.querySelector('.add-item-btn');
const listInput = document.querySelector('input.user-input');
const ul = document.querySelector('ul');

// color buttons and background color target
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const tealBtn = document.querySelector('.teal');
const yellowBtn = document.querySelector('.yellow');
const orangeBtn = document.querySelector('.orange');
const greyBtn = document.querySelector('.grey');

// ----------------------------------------------------

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

  // delete <li> button
  let deleteLiBtn = document.createElement('button');
  deleteLiBtn.appendChild(document.createTextNode('x')); //append deletebtn with text 'X'
  li.appendChild(deleteLiBtn); // add the delete button to the <li> element
  deleteLiBtn.addEventListener('click', deleteListItem); // delete <li> when delete button is clicked with function

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
// ADD List Item Event Listener
addBtn.addEventListener('click', clickAddListItem);

// COLOR Button Event Listeners
redBtn.addEventListener('click', () => {
  listContainer.style.background='lightcoral';
});

blueBtn.addEventListener('click', () => {
  listContainer.style.background='lightblue';
});

greenBtn.addEventListener('click', () => {
  listContainer.style.background='yellowgreen';
});

tealBtn.addEventListener('click', () => {
  listContainer.style.background='lightseagreen';
});

yellowBtn.addEventListener('click', () => {
  listContainer.style.background='rgb(207, 207, 12)';
});

orangeBtn.addEventListener('click', () => {
  listContainer.style.background='lightsalmon';
});

greyBtn.addEventListener('click', () => {
  listContainer.style.background='rgb(185, 185, 185)';
});


