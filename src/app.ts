import * as fromStore from './store';

import { renderTodos } from './utils';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

const reducers = {
  todos: fromStore.toDoReducer
};

const store = new fromStore.Store(reducers);

console.log(store.value);

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };

    store.dispatch(new fromStore.AddTodo(payload));
    console.log(store.value);
    input.value = '';
  },
  false
);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    const todo = JSON.parse(target.getAttribute('data-todo') as string);
    store.dispatch(new fromStore.RemoveTodo(todo));
  }
});

const unsubscribe = store.subscribe(state => renderTodos(state.todos.data));

destroy.addEventListener('click', function(event) {
  unsubscribe();
});
