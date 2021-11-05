import axios from 'axios';
import Web3Utils from './utils';

export const getLogs = function (address, fromBlock, toBlock) {
  return new Promise((resolve, reject) => {
    let res = axios.post('https://mainnet.infura.io/v3/c78d97601e30450d8f86f75dc1fec7f2', { 
      "jsonrpc":"2.0",
      "id":1,"method":"eth_getLogs",
      "params":[
        {
          "address": address,
          "fromBlock": Web3Utils.inputBlockNumberFormatter(fromBlock),
          "toBlock": Web3Utils.inputBlockNumberFormatter(toBlock),
          "topics":[]
        }
      ]
     });
    resolve(res);
  })
  
};

export default {getLogs}