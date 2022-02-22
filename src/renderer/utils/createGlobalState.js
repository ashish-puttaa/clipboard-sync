import * as React from 'react';
import { useCombinedReducers } from '../hooks';

const DispatchContext = React.createContext();
const StateContext = React.createContext();

const transformReducers = (reducerObject) => {
   return Object.entries(reducerObject).reduce((acc, curr) => {
      const [contextName, reducer] = curr;

      let reducerHandler, initialReducerState;

      if (Array.isArray(reducer)) {
         reducerHandler = reducer[0];
         initialReducerState = reducer[1];
      } else if (typeof reducer === 'object') {
         const isNested = !('handler' in reducer && 'initialState' in reducer);

         if (isNested) {
            return { ...acc, [contextName]: transformReducers(reducer) };
         }

         reducerHandler = reducer.handler;
         initialReducerState = reducer.initialState;
      } else {
         reducerHandler = reducer;
         initialReducerState = reducer.initialState;
      }

      return { ...acc, [contextName]: React.useReducer(reducerHandler, initialReducerState) };
   }, {});
};

const useGlobalState = () => {
   const dispatch = React.useContext(DispatchContext);
   const context = React.useContext(StateContext);

   return [context, dispatch];
};

export function createGlobalState(rootReducer) {
   function GlobalState({ children }) {
      const [state, dispatch] = useCombinedReducers(transformReducers(rootReducer));

      return (
         <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>{children}</StateContext.Provider>
         </DispatchContext.Provider>
      );
   }

   return { GlobalState, useGlobalState };
}

/*
   Root Reducer is an object with contextNames as keys and its reducers as values. Contexts can be nested.
   The reducers can be either of the following. 

   1. Array - [reducerHandler, initialReducerState]

   2. Object - {
         handler: reducerHandler,
         initialState: initialReducerState
      }

   3. Just the reducerHandler, but with reducerHandler.initialState = initialReducerState
*/
