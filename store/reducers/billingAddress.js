import { ADD_BILL_ADDR } from '../actions/billingAddress';

const initialState = {
  billAddr: []
};



export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BILL_ADDR:
      return {
        ...state, billAddr: [...state.billAddr, action.payload]
      };
  }

  return state;
};
