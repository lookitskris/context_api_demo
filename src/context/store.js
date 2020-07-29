import React, { createContext, useContext, useReducer } from 'react';
import nameReducer from './reducers/nameReducer';

const StoreContext = createContext();

const initialState = {
  name: '',
};

const combineReducers = (...reducers) => (state = initialState, action = {}) => {
    for (let i = 0; i < reducers.length; i++)
        state = reducers[i](state, action);
    return state;
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(nameReducer), initialState);
  
  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);