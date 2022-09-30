import React from 'react';
import logo from './logo.svg';
import './App.css';

import { TextComponent } from './TextComponent';

import { DittoProvider } from 'ditto-react';
import dittoData from './ditto';

const App = () => (
  <DittoProvider source={dittoData}>
    <div className="App">
      <header className="App-header">
        <h2>App IO</h2>
        <ul className="ElemList">
          <li>
            <TextComponent componentId="app-io.menu.messaggi" />
          </li>
          <li>
            <TextComponent componentId="app-io.menu.portafoglio-1" />
          </li>
          <li>
            <TextComponent componentId="app-io.menu.profilo" />
          </li>
          <li>
            <TextComponent componentId="app-io.menu.servizi" />
          </li>
        </ul>
        <h2>Variables</h2>
        <ul className="ElemList">
          <li>
            <TextComponent
              componentId="email.footer.needhelp.content"
              variables={{
                TransactionID: 'F57E2F8E-25FF-4183-AB7B-4A5EC1A96644',
              }}
            />
          </li>
          <li>
            <TextComponent
              componentId="email.title.paymentcompleted"
              variables={{ Importo: '150€' }}
            />
          </li>
        </ul>
        <h2>Plurals</h2>
        <ul className="ElemList">
          <li>
            <TextComponent
              componentId="test"
              variables={{ CountableVariable: 2 }}
              count={2}
            />
          </li>
        </ul>
      </header>
    </div>
  </DittoProvider>
);

export default App;
