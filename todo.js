let todoList = JSON.parse(localStorage.getItem('todos')) || [
  {
    item: 'Buy Milk',
    dueDate: '4/10/2023'
  },
  {
    item: 'Go to College',
    dueDate: '4/10/2023'
  }
];

displayItems();

function saveToStorage() {
  localStorage.setItem('todos', JSON.stringify(todoList));
}

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  todoList.push({ item: todoItem, dueDate: todoDate });

  inputElement.value = '';
  dateElement.value = '';

  saveToStorage();   // save
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];

    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="deleteTodo(${i})">
        Delete
      </button>
    `;
  }

  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  saveToStorage();   // save after delete
  displayItems();
}