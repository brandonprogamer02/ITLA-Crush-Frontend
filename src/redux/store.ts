import { combineReducers, createStore, applyMiddleware } from 'redux'

import { CombineReducer } from './storeTypes'
import provinciaReducer from './Confesion/ConfesionReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import UserReducer from './User/UserReducer'


const reducers = combineReducers({
     confesiones: provinciaReducer,
     user: UserReducer
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store