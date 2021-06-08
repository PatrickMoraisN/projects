const initialState= {
  cartProducts: [],
  totalValue: 0,
}

const ProductReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT':
      return {...state, totalValue: state.totalValue + action.payload.totalValue, cartProducts: [...state.cartProducts, action.payload.cartProducts]}
      break;
  }
  return state
};

export default ProductReducer;