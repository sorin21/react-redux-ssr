import {FETCH_USERS} from '../actions';

const usersReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_USERS: 
    console.log('action.payload.data', action.payload.data);
      return action.payload.data;

    default:
      return state;
  }
}

export default usersReducer;