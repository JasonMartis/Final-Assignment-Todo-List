"use strict";

const todoListContainer = document.getElementById("todoList");
const input = document.getElementById("input");
const addButton = document.getElementById("addButton");

// create Todo List
const makeToDoList = async () => {
  todoListContainer.innerHTML = "";
  const taskData = await getTask();

  taskData.forEach((todo) => {
    const description = todo.description;
    const done = todo.done;
    const id = todo._id;

    const task = document.createElement("li");
    task.classList.add("classList");
    const span = document.createElement("span");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("removeButton");

    todoListContainer.appendChild(task);
    task.appendChild(checkBox);
    task.appendChild(span);
    span.innerText = description;
    task.appendChild(deleteButton);

    // Event Listener Delete Todo List Item/Task
    deleteButton.addEventListener("click", function () {
      removeToDoTask(id);
    });

    let update;
    if (done === true) {
      update = false;
      checkBox.checked = true;
      span.style.textDecoration = "line-through";
    } else {
      checkBox.checked = false;
      update = true;
    }

    // Event Listener Update Todo List Item/Task
    checkBox.addEventListener("click", function () {
      updateTodoList(id, description, update);
    });
  });
};
makeToDoList();

// Create a Todo Item/Task
const makeToDoTask = () => {
  const text = input.value;
  postTask(text);
  input.value = " ";
  makeToDoList();
};

// Event Listener Create Todo List
addButton.addEventListener("click", makeToDoTask);

// Delete Todo Item/Task
const removeToDoTask = (id) => {
  deleteTask(id);
  makeToDoList();
};

// Update Todo List/Item/Task
const updateTodoList = (id, description, done) => {
  putTask(id, description, done);
  makeToDoList();
};
