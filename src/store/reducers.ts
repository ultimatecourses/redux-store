import * as fromAction from './actions';

type TodoState = {
  loaded: boolean;
  loading: boolean;
  data: {label: string; complete: boolean}[]
}

export const initialState: TodoState = {
  loaded: false,
  loading: false,
  data: [],
};

// Each reducer manages a subset of data in a store
// In this case this reduce is to only handle todo.
// It's good to have a named function for better stack trace.
export function toDoReducer(
  state = initialState,
  action: fromAction.Action) {
  switch (action.type) {
    case fromAction.ADD_TODO: {
      const todo = action.payload;
      // create new array of todos
      const data = [...state.data, todo];
      return {
        ...state,
        // short-hand for {data: data}
        data
      };
    }
    case fromAction.REMOVE_TODO: {
      const data = state.data.filter(todo => todo.label !== action.payload.label);
      return {
        ...state,
        data
      };
    }
  }

  return state;
};
