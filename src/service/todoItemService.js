import { WEB_CONFIG } from "../constants/config.js"
import { capSID } from "../util/TaoSID.js"
import { getCurrentDateFormatted } from "../util/dateCreate.js"

const TodoItemSchema = {
  id: '',
  title: '',
  isChecked: false,
  todoName: '',
  createdDate: '',
  dueDate: ''
}

// READ 
function getAllTodoItem() {
  const todoItemArrayStr = localStorage.getItem(WEB_CONFIG.STORAGE.STORAGE_KEY.TODO_ITEM);
  return todoItemArrayStr ? JSON.parse(todoItemArrayStr) : [];
}

function getAllTodoItemByTodoName(todoName) {
  const todoItems = getAllTodoItem();
  return todoItems.filter(todoItem => todoItem.todoName === todoName);
}

// CREATE
function createTodoItem(title, dueDate, todoName) {
  let newTodoItemObject = {
    ...TodoItemSchema,
    title,
    dueDate,
    todoName,
    id:capSID(),
    createdDate:getCurrentDateFormatted()
    }

  const todoItems = getAllTodoItem();
  todoItems.push(newTodoItemObject);
  localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.TODO_ITEM, JSON.stringify(todoItems));
  return newTodoItemObject;
}

// UPDATE
function updateTodoItem(updateTodoItemObject) {
  const todoItems = getAllTodoItem();
  const index = todoItems.findIndex(todoItem => todoItem.id === updateTodoItemObject.id);
  const errorMsg = ''
  if (index !== -1) {
    todoItems[index] = { ...todoItems[index],
        title: updateTodoItemObject.title,
        isChecked: updateTodoItemObject.isChecked,
        dueDate: updateTodoItemObject.dueDate
     };
    localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.TODO_ITEM, JSON.stringify(todoItems));
    return todoItems[index];
  }

  return errorMsg === '' ? null : errorMsg; // or handle the case where the category doesn't exist
}

// DELETE
function deleteTodoItemByTodoName(todoName) {
  const todoItems = getAllTodoItem();
  const filteredTodoItemByTodoName = todoItems.filter(todoItem => todoItem.todoName === todoName);
  localStorage.setItem(WEB_CONFIG.STORAGE.STORAGE_KEY.TODO_ITEM, JSON.stringify(filteredTodoItemByTodoName));
}

function deleteAllTodo() {
  localStorage.removeItem(WEB_CONFIG.STORAGE.STORAGE_KEY.TODO);
}

const todoItemService = {
  getAllTodoItemByTodoName,
  createTodoItem,
  updateTodoItem,
  deleteTodoItemByTodoName,
  deleteAllTodo
}

export { todoItemService }
