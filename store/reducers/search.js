import { SEARCH_KEYWORD
} from '../actions/search';

const initialState = {
  searchKeyword: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
    case SEARCH_KEYWORD:
        return{...state,
          searchKeyword: state.searchKeyword
        };
     }

  return state;
};
