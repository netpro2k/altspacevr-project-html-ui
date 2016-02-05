import {Space, User} from '../lib/data/Data.js'

export const FETCH_SPACES = 'FETCH_SPACES'
export const UPDATE_SPACE = 'UPDATE_SPACE'
export const ADD_SPACE = 'ADD_SPACE'
export const DELETE_SPACE = 'DELETE_SPACE'

export function fetchSpaces() {
  return {
    type: FETCH_SPACES,
    payload: Space.getAll()
  }
}

export function updateSpace(space) {
  return {
    type: UPDATE_SPACE,
    payload: Space.updateById(space.id, space)
  }
}

export function addSpace(space) {
  return {
    type: ADD_SPACE,
    payload: Space.create(space)
  }
}

export function deleteSpace(id) {
  const payload = new Promise((resolve, reject) => {
    Space.deleteById(id).then(() => resolve(id), reject)
  })

  return {
    type: DELETE_SPACE,
    payload
  }
}




export const FETCH_USERS = 'FETCH_USERS'
export const UPDATE_USER = 'UPDATE_USER'
export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: User.getAll()
  }
}
