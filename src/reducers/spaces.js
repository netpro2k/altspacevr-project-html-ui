import {FETCH_SPACES, UPDATE_SPACE, ADD_SPACE, DELETE_SPACE} from '../actions/index.js'

const spaceReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SPACE:
      if (action.payload.id !== state.id) {
        return state
      }
      return action.payload
    case ADD_SPACE:
      return action.payload
    default:
      return state
  }
}

export default (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_SPACES:
      return action.payload
    case UPDATE_SPACE:
      return state.map(item => spaceReducer(item, action))
    case ADD_SPACE:
      return [...state, spaceReducer(null, action)]
    case DELETE_SPACE:
      const idx = state.findIndex(space => space.id === action.payload)
      if (idx !== -1) {
        const tmp = [...state]
        tmp.splice(idx, 1)
        return tmp
      }
  }
  return state
}
