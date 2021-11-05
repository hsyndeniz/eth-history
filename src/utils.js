import Web3Utils from 'web3-utils';
import InputDataDecoder from 'ethereum-input-data-decoder';
import axios from 'axios';

export const getLogs = function (address, fromBlock, toBlock) {
  return new Promise((resolve, reject) => {
    let res = axios.post('https://mainnet.infura.io/v3/c78d97601e30450d8f86f75dc1fec7f2', { 
      "jsonrpc":"2.0",
      "id":1,"method":"eth_getLogs",
      "params":[
        {
          "address": address,
          "fromBlock": inputBlockNumberFormatter(fromBlock),
          "toBlock": inputBlockNumberFormatter(toBlock),
          "topics":[]
        }
      ]
     });
    resolve(res);
  })
  
};

export const inputBlockNumberFormatter = function (blockNumber) {
  if (blockNumber === undefined) {
    return undefined;
  }

  if (blockNumber === 'genesis') {
    return '0x0';
  }

  return (Web3Utils.isHexStrict(blockNumber)) ? ((typeof blockNumber === 'string') ? blockNumber.toLowerCase() : blockNumber) : Web3Utils.numberToHex(blockNumber);
};

export const parseTransaction = function (txHash) {
  return new Promise((resolve, reject) => {
    let res = axios.post('https://mainnet.infura.io/v3/c78d97601e30450d8f86f75dc1fec7f2', { 
      "jsonrpc":"2.0",
      "id":1,"method":"eth_getTransactionByHash",
      "params":[
        txHash
      ]
     });
    resolve(res);
  })
  
};


export default {inputBlockNumberFormatter, getLogs, parseTransaction}