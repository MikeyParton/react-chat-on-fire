import { database } from '../firebase'

export const usersRef = database.ref('users')
export const adminsRef = database.ref('admins')

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    displayName: user.displayName,
    uid: user.uid,
    photoURL: user.photoURL
  };
};

export const addAdmin = (uid) => {
  return {
    type: 'ADD_ADMIN',
    uid
  };
};

export const startListeningForUsers = () => {
  return (dispatch) => {
    usersRef.on('child_added', (snapshot) => {
      const user = snapshot.val()
      dispatch(addUser(user))
    })
  }
}

export const startListeningForAdmins = () => {
  return (dispatch) => {
    adminsRef.on('child_added', (snapshot) => {
      dispatch(addAdmin(snapshot.key))
    })
  }
}