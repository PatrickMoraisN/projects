const initialState = {count: 0, text: 'incrementar'};

const ContadorReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNT':
      return {...state, count: action.payload.count, text: action.payload.text};
      break;
  }
  return state;
}

export default ContadorReducer;