export class Store {
    private subscribers: Function[];
    private reducers: {[key: string]: Function};
    private state: {[key: string]: any};

    constructor(reducers = {}, initialState = {}){
        // initialize state
        this.state = initialState;

    }

    // this returns the state via a function when the .value attribute is accessed elsewhere, useful since private
    get value(){
        return this.state;
    }

    
}