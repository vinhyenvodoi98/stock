export const LOGIN = 'LOGIN';
export const login = (isLogin) => async (dispatch) => {
  dispatch({
    type: LOGIN,
    isLogin
  });
  //  isLogin will save in store and can be called from any view
};

//NOTE
// some thing u want set it global

// export const NAME = 'NAME';
// export const functionName = () => async (dispatch) => {
//   may be run some code here then
//   dispatch({
//     type: NAME,
//     somthing in initialState at actions/accountAcction
//   });
// };
