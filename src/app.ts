import * as fromStore from "./store";

import { renderTodos } from "./utils";

const input = document.querySelector("input") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
const destroy = document.querySelector(".unsubscribe") as HTMLButtonElement;
const todoList = document.querySelector(".todos") as HTMLLIElement;

const store = new fromStore.Store(
  {},
  {
    todos: [{ label: "Eat pizza", complete: false }],
  }
);

console.log(store.value);

button.addEventListener(
  "click",
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };

    console.log(payload);

    input.value = "";
  },
  false
);

todoList.addEventListener("click", function (event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === "button") {
    console.log(target);
  }
});
