import {ReduceStore} from "flux/utils";
import Dispatcher from '../dispatcher/dispatcher';

class AppStore extends ReduceStore{
    constructor(){
        super(Dispatcher);
    }
    getInitialState(){
        const init = {};
        return init;
    }

    reduce(state, action){
        switch(action.type){


            default:
                return state;
                break;
        }
    }
}

export default new AppStore();