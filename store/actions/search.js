export const SEARCH_KEYWORD = 'SEARCH_KEYWORD';

export const addToSearchKeyword = payload => {
  return { type: SEARCH_KEYWORD, payload: payload };
};
