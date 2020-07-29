import React, {useEffect, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import {useStore} from "./context/store";
import {updateNameAction} from './context/actions/nameActions';

function App() {
  
  const {state, dispatch} = useStore();
  const stableDispatch = useCallback(dispatch, []) 

    useEffect(() =>{
        stableDispatch(updateNameAction("kris"))
   },[stableDispatch])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Name from store: {state.name}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
