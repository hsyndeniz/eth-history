import React, { useEffect } from 'react';
import Web3 from 'web3';

import { getLogs, parseTransaction } from './utils';

import logo from './logo.svg';
import './App.css';

const web3 = new Web3("http://eth01.infra.zaisan.io:8745");

function App() {

  useEffect(() => {
    // Make a request for a user with a given ID 13539492
    getLogs("0xdc24316b9ae028f1497c275eb9192a3ea0f67022", 13536770, 13536900).then(res => {
      console.log(res);
      res.data.result.map(async tx => {
        const txDetails = await parseTransaction(tx.transactionHash);
        console.log(txDetails);
      });
    });
  }, []);

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
      </header>
    </div>
  );
}

export default App;
