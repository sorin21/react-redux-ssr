// import {FETCH_USERS} from '../actions';

// const initialState = {
//   users: []
// }
// const usersReducer = (state = [], action) => {
//   switch(action.type) {
//     case FETCH_USERS: 
//     console.log('action.payload.data', action.payload.data);
//       return action.payload.data;
//       // return {
//       //   ...state,
//       //   users: state.users.concat(action.payload.data.data)
//       // };

//     default:
//       console.log('state switch', state)
//       return state;
//   }
// }

// export default usersReducer;

import { FETCH_USERS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
        console.log('action.payload', action.payload);
      return action.payload;
    default:
      return state;
  }
};
