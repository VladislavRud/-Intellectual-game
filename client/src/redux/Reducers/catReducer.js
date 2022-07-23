import { GET_CAT } from '../Actions/actionTypes';

const catReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CAT:
      return payload;
    default:
      return state;
  }
};
export default catReducer;
