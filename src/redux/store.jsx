import { createStore } from 'redux'
import allReducer from '../Reducer/combineReducer'


export const store = createStore(allReducer)

