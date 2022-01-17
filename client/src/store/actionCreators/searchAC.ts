import { searchActions, SearchActionTypes } from '../../types/searchTypes';

export const setSearchValue = (searchValue: string): searchActions => {
  return {
    type: SearchActionTypes.SET_SEARCH_VALUE,
    payload: searchValue,
  };
};
