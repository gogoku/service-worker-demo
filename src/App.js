import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import localforage from 'localforage'

function App() {
  const [active, setActive] = useState(false)

  const toggleServiceWorker = async () => {
    debugger
    if(!active){
      try {
        await localforage.setItem('userToken',"tokenValue124");
        serviceWorkerRegistration.register()
    } catch (err) {
        // This code runs if there were any errors.
        console.log(err);
    }
      
    }else{
      localforage.removeItem("userToken")
      serviceWorkerRegistration.unregister()
    }
    setActive(!active);
  }

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
          Learn React
        </a>
        <p>
          <button onClick={toggleServiceWorker}>{`${active ? 'Deactivate': 'Activate'} Service Worker`}</button>
        </p>
        <p>
          {
            active ? "service worker active" : "service worker inactive"
          }
        </p>
      </header>
    </div>
  );
}

export default App;
