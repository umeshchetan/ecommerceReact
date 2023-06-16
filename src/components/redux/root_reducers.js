import { combineReducers } from 'redux'
import { cart_reducer } from './reducers'

const root_reducer = combineReducers({
    cart_reducer
}) 

export default root_reducer;
