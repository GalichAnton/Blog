import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

export const composeEnhancers =
  // eslint-disable-next-line
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const saveState = (state: RootState) => {
//   try {
//     // Convert the state to a JSON string
//     const serialisedUserState = JSON.stringify(state.user);
//     const serialisedPostState = JSON.stringify(state.posts);
//     // Save the serialised state to localStorage against the key 'app_state'
//     window.localStorage.setItem('user_state', serialisedUserState);
//     window.localStorage.setItem('post_state', serialisedPostState);
//   } catch (err) {
//     // Log errors here, or ignore
//   }
// };
// const loadState = (): RootState | undefined => {
//   const state = {} as RootState;
//   try {
//     // Load the data saved in localStorage, against the key 'app_state'
//     const serialisedUserState = window.localStorage.getItem('user_state');
//     const serialisedPostState = window.localStorage.getItem('post_state');
//     // Passing undefined to createStore will result in our app getting the default state
//     // If no data is saved, return undefined
//     if (serialisedUserState) {
//       state.user = JSON.parse(serialisedUserState);
//     } else {
//       return undefined;
//     }
//     if (serialisedPostState) {
//       state.posts = JSON.parse(serialisedPostState);
//     } else {
//       return undefined;
//     }
//     // De-serialise the saved state, and return it.
//     return state;
//   } catch (err) {
//     // Return undefined if localStorage is not available,
//     // or data could not be de-serialised,
//     // or there was some other error
//     return undefined;
//   }
// };
//
// const oldState = loadState();

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// store.subscribe(() => {
//   saveState(store.getState());
// });
