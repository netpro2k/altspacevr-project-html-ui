import { combineReducers } from 'redux'
import spacesReducer from './spaces.js'
import usersReducer from './users.js'
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  spaces: spacesReducer,
  users: usersReducer,
  form: formReducer
})

export default rootReducer
