// "use strict";

const url = "http://localhost:3000/";

// FUNCTION: GET DATA
const getTask = async () => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// FUNCTION: POST DATA
const postTask = async (inputValue) => {
  const task = { description: inputValue, done: false };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// FUNCTION: DELETE DATA
const deleteTask = async (id) => {
  const res = await fetch(`${url}${id}`, { method: "DELETE" });
  console.log(`ID: ${id} was deleted`);
  return res;
};

// FUNCTION: UPDATE DATA
const putTask = async function (id, description, done) {
  const toDoItemData = { description: description, done: done };
  const res = await fetch(`${url}${id}`, {
    method: "PUT",
    body: JSON.stringify(toDoItemData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
