import { createStore } from "redux";
import root_reducers from './components/redux/root_reducers'

const store = createStore(
    root_reducers
);


export default store;