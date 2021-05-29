import { ADD_PAYMENT_METHOD } from '../actions/payment';

const initialState = {
  payment: []
};



export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAYMENT_METHOD:
      return {
        ...state, payment: [...state.payment, action.payload]
      };
  }

  return state;
};