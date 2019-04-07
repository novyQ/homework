import { DISPLAY_USER, CLEAR_DISPLAY, SET_DATA } from './actions'

const initialState = {
  userList: null,
  display: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_USER: {
      console.log('action payload', action.payload)
      const newState = Object.assign({}, state, { display: action.payload });
      console.log('reducer newState', newState)
      return Object.assign({}, state, { display: action.payload });
    }

    case CLEAR_DISPLAY:
      return Object.assign({}, state, { display: null });

    case SET_DATA: {
      return Object.assign({}, state, { userList: action.payload });
    }

    default:
       return state;
   }
};

export default reducer;
