import { Web3Auth } from "@web3auth/web3auth";
import Web3 from "web3";

import './App.css';
import FormData from "./Form";
import { useCallback, useEffect, useState } from "react";

const ethAbi = require('ethereumjs-abi');

function App() {
  const [web3auth] = useState(new Web3Auth({
    clientId: process.env.REACT_APP_CLIENT_ID,
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0x89", // hex of 137, polygon mainnet
    },
  }));

  const [ready, setReady] = useState(false);
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [dataHash, setDataHash] = useState('');
  const [signature, setSignature] = useState('');
  const onConnect = useCallback(async () => {
    await web3auth.connect();

    const web3 = new Web3(web3auth.provider);
    const fromAddress = (await web3.eth.getAccounts())[0];
    setWalletAddress(fromAddress);

    setConnected(true);
  }, [web3auth]);

  const onLogout = useCallback(() => {
    web3auth.logout().then(() => {
      setConnected(false);
    })
  }, [web3auth]);

  const onSign = useCallback(async (info) => {
    const web3 = new Web3(web3auth.provider);
    const method = process.env.REACT_APP_METHOD_ID;
    const { tokenAddress, from, to, tokenId } = info;

    const dataHash = ethAbi.soliditySHA3(
      ['bytes4', 'address', 'address', 'address', 'uint256'],
      [method, tokenAddress, from, to, tokenId]);
    const hashString = `0x${dataHash.toString('hex')}`;

    const signedMessage = await web3.eth.personal.sign(hashString, walletAddress);

    setDataHash(hashString);
    setSignature(signedMessage);
  }, [web3auth.provider, walletAddress])

  useEffect(() => {
    web3auth.initModal().then(() => setReady(true)).catch(window.alert);
  }, [web3auth]);

  useEffect(() => {
    if (dataHash && signature) {
      window.alert(`dataHash: ${dataHash}\nsignature: ${signature}`)
    }
  }, [dataHash, signature])

  return (
    <div className="App">
      <header className="App-header">
        {connected ? (
          <FormData walletAddress={walletAddress} onSign={onSign} onLogout={onLogout} />
        ) : (ready ? <button onClick={onConnect} type="button">{'Connect'}</button> : 'Loading...')
        }
      </header>
    </div>
  );
}

export default App;
