export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const QUANTITY_MORE = 'QUANTITY_MORE';
export const QUANTITY_LESS = 'QUANTITY_LESS';

export const addToCart = payload => {
  return { type: ADD_TO_CART, payload: payload };
};

 export const removeFromCart = payload => {
   return { type: REMOVE_FROM_CART, payload: payload };
 };

 export const quantityMore = () => {
  return { type: QUANTITY_MORE };
};

export const quantityLess = () => {
  return { type: QUANTITY_LESS };
};
 