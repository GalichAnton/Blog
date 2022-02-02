import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer, RootState } from './reducers/rootReducer';

export const composeEnhancers =
  // eslint-disable-next-line
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const saveState = (state: RootState) => {
  try {
    // Convert the state to a JSON string
    const serialisedUserState = JSON.stringify(state.user);
    // Save the serialised state to localStorage against the key 'app_state'
    window.localStorage.setItem('user', serialisedUserState);
  } catch (err) {
    // Log errors here, or ignore
  }
};
const loadState = (): RootState | undefined => {
  const state = {} as RootState;
  try {
    // Load the data saved in localStorage, against the key 'app_state'
    const serialisedUserState = window.localStorage.getItem('user');
    // If no data is saved, return undefined
    if (serialisedUserState) {
      state.user = JSON.parse(serialisedUserState);
    } else {
      return undefined;
    }
    // De-serialise the saved state, and return it.
    return state;
  } catch (err) {
    // Return undefined if localStorage is not available,
    // or data could not be de-serialised,
    // or there was some other error
    console.log(err);
    return undefined;
  }
};

const oldState = loadState();

export const store = createStore(
  rootReducer,
  oldState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});
