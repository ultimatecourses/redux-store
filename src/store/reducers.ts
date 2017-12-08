export const initialState = {
  loaded: false,
  loading: false,
  data: [],
};

// Each reducer manages a subset of data in a store
// In this case this reduce is to only handle todo.
// It's good to have a named function for better stack trace.
export function toDoReducer(
  state = initialState,
  action: { type: string; payload: any }) {
  switch (action.type) {
    case 'ADD_TODO': {
      const todo = action.payload;
      // create new array of todos
      const data = [...state.data, todo];
      return {
        ...state,
        // short-hand for {data: data}
        data
      };
    }
  }

  return state;
};
