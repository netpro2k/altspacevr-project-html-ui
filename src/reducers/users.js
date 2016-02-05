import {FETCH_USERS, UPDATE_USER, ADD_USER, DELETE_USER} from '../actions/index.js'

const spaceReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      if (action.payload.id !== state.id) {
        return state
      }
      return action.payload
    case ADD_USER:
      return action.payload
    default:
      return state
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload
    case UPDATE_USER:
      return state.map(item => spaceReducer(item, action))
    case ADD_USER:
      return [...state, spaceReducer(null, action)]
    case DELETE_USER:
      const idx = state.findIndex(space => space.id === action.payload)
      if (idx !== -1) {
        const tmp = [...state]
        tmp.splice(idx, 1)
        return tmp
      }
  }
  return state
}
