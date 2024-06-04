import { WEB_CONFIG } from "../constants/config.js"

const TodoSchema = {
  name: '',
  subCategoryName: ''
}

// READ 
function getAllTodo() {
  const todoArrayStr = localStorage.getItem(WEB_CONFIG.STORAGE.STORAGE_KEY.TODO);
  return todoArrayStr ? JSON.parse(todoArrayStr) : [];
}

function getAllTodoBySubCategoryName(subCategoryName) {
  const todos = getAllTodo();
  return todos.filter(todo => todo.subCategoryName === subCategoryName);
}

function getTodoByName(name) {
  const todos = getAllTodo();
  return todos.find(todo => todo.name === name);
}

// CREATE
function createTodo(todoName, subCategoryName) {
  let newTodoObject = {
    ...TodoSchema,
    name: todoName,
    subCategoryName
  }

  const todos = getAllTodo();
  todos.push(newTodoObject);
  localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.TODO, JSON.stringify(todos));
  return newTodoObject;
}

// UPDATE
function updateTodo(updateTodoObject) {
  const todos = getAllTodo();
  const index = todos.findIndex(todo => todo.name === updateTodoObject.name);
  const errorMsg = ''
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updateTodoObject };
    localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.TODO, JSON.stringify(todos));
    return todos[index];
  }

  return errorMsg === '' ? null : errorMsg; // or handle the case where the category doesn't exist
}

// DELETE
function deleteTodoByName(name) {
  const todos = getAllTodo();
  const filteredTodos = todos.filter(todo => todo.name !== name);
  localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.TODO, JSON.stringify(filteredTodos));
}

function deleteAllTodo() {
  localStorage.removeItem(WEB_CONFIG.STORAGE.STORAGE_KEY.TODO);
}
//=================== tạo mới hàm
function isTodoNameAlreadyExistInTodoList(todoName) {
  const todos = getAllTodo()
  let isTodoNameExist = false;
  for (let todo of todos) {    
    if (todos.name === todoName) {
      isTodoNameExist = true;
      break;
    }
  }
  return isTodoNameExist
}

//==================


const todoService = {
  getAllTodoBySubCategoryName,
  getTodoByName,
  createTodo,
  updateTodo,
  deleteTodoByName,
  deleteAllTodo,
  isTodoNameAlreadyExistInTodoList
}

export { todoService }
