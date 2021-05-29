import { ADD_TO_CART, 
   REMOVE_FROM_CART,
   QUANTITY_LESS,
   QUANTITY_MORE 
} from '../actions/cart';
import { ADD_ORDER } from '../actions/orders';


const initialState = {
  items: [],
  totalAmount: 0
};



export default (state = initialState, action) => {
    switch (action.type) {
    case ADD_TO_CART:
        return{...state, items:[...state.items, action.payload], 
            totalAmount: state.totalAmount + action.payload.itemPrice
        };
        
    case ADD_ORDER:
      return initialState;
    
    case QUANTITY_MORE:
      return{currentQty:state.currentQty + 1
      };
        
    case QUANTITY_LESS:
        return{ currentQty: state.currentQty > 1 ? state.currentQty - 1 : state.currentQty
        };

    case REMOVE_FROM_CART:
        let updatedCart = state.items; /* Clone it first */
        state.totalAmount= state.totalAmount - state.items[action.payload].itemPrice;
					updatedCart.splice(action.payload, 1); /* Remove item from the cloned cart state */
				return {...state,items:[...updatedCart],
          totalAmount:state.totalAmount
        };
        
  }

  return state;
};
