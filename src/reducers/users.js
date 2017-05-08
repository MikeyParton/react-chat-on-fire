import initialState from '../initial-state';
import extend from 'lodash/extend';
import clone from 'lodash/clone'

export default function usersReducer(state = initialState.users, action) {
  switch(action.type) {
    case 'ADD_USER':
      return extend(clone(state), { [action.uid]: {
        displayName: action.displayName,
        email: action.email,
        photoURL: action.photoURL
      }});
    case 'ADD_ADMIN':
      const newUserState = extend(clone(state[action.uid]), { admin: true })
      return extend(clone(state), { [action.uid]: newUserState })
    default:
      return state;
  }
}
