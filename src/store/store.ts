export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  // State is the persistent for all data.
  // Each key is the subset of data (think like a table in SQL).
  // Eg: { toDos: {}, configs: {}, users: {}}
  // It would be nice to be dynamic so that the store has a single-responsibility to maintain the persistence layer.
  // Let the reducers and actions be the documentation for you to know what states are available.
  private state: { [key: string]: any[] };

  constructor(reducers = {}, initialState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  // Food for thought, another way to handle this, is to only subscribe to the subset of state you'r interested, rather than getting constant unwanted feedback
  subscribe(subscription: Function) {
    this.subscribers = [...this.subscribers, subscription];
    // When subscribe, also send the latest state immediately
    subscription(this.value);
    return () => {this.subscribers = this.subscribers.filter(sub => sub !== subscription)
    };
  }

  unsubscribe()
  dispatch(action) {
    this.state = this.reduce(this.state, action);
    this.notify();
  }

  private notify() {
    this.subscribers.forEach(fn => fn(this.value));
  }

  private reduce(state, action) {
    const newState = {};
    // By this way, when creating an action we don't need to know which reducer or state we need to identify. We just need to know what type of action it is and the data it needs to send. Decouples the information.
    // The store doesn't need to know as well.
    // It passes that work to the reducer which is the one that really consumes the information to do the actual unit of work.
    for (const prop in this.reducers) {
      // state[prop] ensures we only set and get the subset of the state that the reducer manages.
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
}
