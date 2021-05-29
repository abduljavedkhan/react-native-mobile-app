export const ADD_ORDER = 'ADD_ORDER';
export const ADD_BILL_ADDR = 'ADD_BILL_ADDR';
export const ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD';

export const addOrder = (cartItems, totalAmount,billAddr,payment) => {
  return {
    type: ADD_ORDER,
    orderData: { items: cartItems, amount: totalAmount, billAddr:billAddr, payment,payment }
  };
};

export const addOrderBillAddr = (billAddr) => {
  return {
    type: ADD_BILL_ADDR,
    orderBillData: { billAddr: billAddr }
  };
};

export const addOrderPaymentMethod = (payment) => {
  return {
    type: ADD_PAYMENT_METHOD,
    orderPaymentData: { paymentMethod: payment }
  };
};
