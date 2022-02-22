const getState = (combinedReducers) => {
   return Object.entries(combinedReducers).reduce((acc, entry) => {
      const [key, context] = entry;

      return Array.isArray(context)
         ? { ...acc, [key]: context[0] }
         : { ...acc, [key]: getState(context) };
   }, {});
};

const getDispatches = (combinedReducers) => {
   return Object.entries(combinedReducers).reduce((acc, entry) => {
      const [, context] = entry;

      return Array.isArray(context) ? [...acc, context[1]] : [...acc, ...getDispatches(context)];
   }, []);
};

export const useCombinedReducers = (combinedReducers) => {
   const state = getState(combinedReducers);
   const dispatch = (action) => getDispatches(combinedReducers).forEach((fn) => fn(action));

   return [state, dispatch];
};

/*
   EXAMPLE:

   import * as React from 'react';
   import useCombinedReducers from 'use-combined-reducers';

   const App = () => {
      const [state, dispatch] = useCombinedReducers({
         user: React.useReducer(userReducer, userInitialState),
         cart: React.useReducer(cartReducer, cartIntitialState),
      });

      const { user, cart } = state;

      ...
   }

   export default App;
*/

/* 
   export const useCombinedReducers = (combinedReducers) => {
      const state = Object.keys(combinedReducers).reduce(
         (acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }),
         {}
      );

      const dispatch = (action) =>
         Object.keys(combinedReducers)
            .map((key) => combinedReducers[key][1])
            .forEach((fn) => fn(action));

      return [state, dispatch];
*/
