import { ISearchState, searchActions, SearchActionTypes } from '../../types/searchTypes';

const initialState: ISearchState = {
  searchValue: '',
};

export const searchReducer = (state = initialState, action: searchActions): ISearchState => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};
