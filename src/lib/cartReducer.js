// cartReducer.js

export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

export const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
