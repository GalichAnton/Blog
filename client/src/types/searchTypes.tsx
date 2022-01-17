export interface ISearchState {
  searchValue: string;
}

export enum SearchActionTypes {
  SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
}

interface ISetSearchAction {
  type: SearchActionTypes.SET_SEARCH_VALUE;
  payload: string;
}

export type searchActions = ISetSearchAction;
