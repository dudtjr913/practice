import { todoStatus, todoErrorMessage, NAME, ALL, STRING } from './utils/constant.js';
import { generateId, isValueExist, getExValue } from './utils/utils.js';

const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
console.log(context);
class TodoManagement {
  constructor() {
    this.todosList = [];
  }

  addTodo(todoName, tags, status) {
    if (isValueExist(this.todosList, NAME, todoName)) {
      return alert(todoErrorMessage.EXIST_NAME);
    }
    if (!Array.isArray(tags) || !todoStatus.includes(status)) {
      return alert(todoErrorMessage.WRONG_VALUE);
    }
    const todoId = generateId(this.todosList);
    const todoObj = {
      name: todoName,
      tags,
      status,
      id: todoId,
    };
    this.todosList.push(todoObj);

    return todoObj;
  }

  removeTodo(todoName) {
    const exTodo = getExValue(this.todosList, NAME, todoName);
    if (!exTodo) {
      return;
    }

    return (this.todosList = this.todosList.filter((key) => key.name !== todoName));
  }

  todoStatusUpdate(todoName, status) {
    const exTodo = getExValue(this.todosList, NAME, todoName);
    if (!exTodo) {
      return;
    }

    if (exTodo.status === status || !todoStatus.includes(status)) {
      return alert(todoErrorMessage.WRONG_STATUS);
    }

    return (exTodo.status = status);
  }

  addTags(todoName, tagName) {
    const exTodo = getExValue(this.todosList, NAME, todoName);
    if (!exTodo) {
      return;
    }

    if (typeof tagName === STRING) {
      return exTodo.tags.push(tagName);
    }
    if (Array.isArray(tagName)) {
      return (exTodo.tags = [...exTodo.tags, ...tagName]);
    }

    return alert(todoErrorMessage.WRONG_TAGS);
  }

  removeTag(todoName, tagName) {
    const exTodo = getExValue(this.todosList, NAME, todoName);
    if (!exTodo) {
      return;
    }
    if (typeof tagName !== STRING) {
      return alert(todoErrorMessage.NOT_WORD);
    }
    const exTagIndex = exTodo.tags.findIndex((tag) => tag === tagName);
    if (exTagIndex === -1) {
      return alert(todoErrorMessage.NOT_HAVING_TAG);
    }

    return exTodo.tags.splice(exTagIndex, 1);
  }

  changeTodoName(todoName, changeName) {
    if (isValueExist(this.todosList, NAME, todoName)) {
      return alert(todoErrorMessage.EXIST_NAME);
    }
    const exTodo = getExValue(this.todosList, NAME, todoName);
    if (!exTodo) {
      return;
    }

    return (exTodo.name = changeName);
  }
}

class Todo extends TodoManagement {
  show(status) {
    if (![ALL, ...todoStatus].includes(status)) {
      return alert(todoErrorMessage.WRONG_SHOW_STATUS);
    }
    if (status === ALL) {
      return this.showAll();
    }

    return this.showSelectedStatus(status);
  }

  showAll() {
    const allList = {};
    this.todosList.forEach((key) => {
      if (allList[key.status]) {
        return allList[key.status]++;
      }
      return (allList[key.status] = 1);
    });

    const convertedResult = Object.entries(allList).map((v) => {
      v[v.length - 1] += '개';
      return v.join(':');
    });

    return `현재상태 : ${convertedResult.join(', ')}`;
  }

  showSelectedStatus(status) {
    const statusList = [];
    this.todosList.forEach((key) => {
      if (key.status === status) {
        return statusList.push(key.name);
      }
    });

    return `${status}리스트:총${statusList.length}건, ${statusList.join(', ')}`;
  }
}

const todo = new Todo();
todo.addTodo('그림 그리기', ['paint'], 'todo');
todo.addTodo('코딩 공부하기', ['javascript', 'code', 'vanila'], 'done');
todo.addTags('그림 그리기', '어허허');
todo.removeTag('그림 그리기', 'paint');
console.log(todo.show('done'));
console.log(todo.todosList);
