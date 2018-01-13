// How to write a good action constants
//   v-- the namespace    v-- this is the benefit of a human, so verbosity is fine
// [State involve] The action explicitly
export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove a todo';

// Boilerplates for action creators
export interface Action {
  readonly type: string;
  readonly payload: any;
}
// Don't need to remember the type
// Instantiating the class, gives you the information needed to create a valid object.
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any) {}
}

export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload: any) {}
}
