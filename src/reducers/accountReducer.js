import * as actions from '../actions/accountAction';

const initialState = {
  isLogin: false
  // NOTE
  // some thing you want to set global
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isLogin: action.isLogin
      };
    // NOTE
    // write case to update initialState
    default:
      return state;
  }
};

export default accountReducer;
