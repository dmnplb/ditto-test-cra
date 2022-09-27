import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Ditto, DittoProvider } from 'ditto-react';
import dittoData from './ditto';

const App = () => (
  <DittoProvider source={dittoData}>
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Ditto componentId="app-io.menu.messaggi" />
          </li>
          <li>
            <Ditto componentId="app-io.menu.portafoglio-1" />
          </li>
          <li>
            <Ditto componentId="app-io.menu.profilo" />
          </li>
          <li>
            <Ditto componentId="app-io.menu.servizi" />
          </li>
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </DittoProvider>
);

export default App;
