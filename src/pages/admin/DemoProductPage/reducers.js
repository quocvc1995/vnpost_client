import * as Types from './constants';
var initialState = {
  lst: null,
  msg: ''
};

const product = (state = initialState, action) => {

  switch (action.type) {
    case Types.FETCH_PRODUCT:
      return state
    case Types.FETCH_PRODUCT_SUCCESS:
      {
        state.lst = action.listProduct        
        return state
      }
    case Types.FETCH_PRODUCT_FAIL:
      return action.msg
    //
    default:
      return state
  }
};


export default product;    