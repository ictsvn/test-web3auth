import { Web3Auth } from "@web3auth/web3auth";
import Web3 from "web3";

import './App.css';
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [web3auth] = useState(new Web3Auth({
    clientId: "BH_yMG4qUUkP4Tzw-_R86IEAqCh87Hc2iAfUGvqyMt-pt7ZPZUm9MMtXYErw1eVWWO3rGHlJZ_wg1Tjyr--RtP4", // Get your Client ID from Web3Auth Dashboard
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0x89", // hex of 137, polygon mainnet
    },
  }));

  const [ready, setReady] = useState(false);
  const [connected, setConnected] = useState(false);
  const message = useRef('');
  const onConnect = useCallback(() => {
    web3auth.connect().then(() => setConnected(true));
  }, [web3auth]);

  const onSign = useCallback(async () => {
    const web3 = new Web3(web3auth.provider);
    const fromAddress = (await web3.eth.getAccounts())[0];
    const signedMessage = await web3.eth.personal.sign(message.current, fromAddress);
    window.alert(signedMessage);
  }, [web3auth.provider])

  useEffect(() => {
    web3auth.initModal().then(() => setReady(true)).catch(window.alert);
  }, [web3auth]);

  return (
    <div className="App">
      <header className="App-header">
        {connected && <input placeholder="type your message here" onChange={e => message.current = e.target.value} type="text"></input>}
        <button onClick={connected ? onSign : ready ? onConnect : undefined} type="button">{connected ? 'Sign' : ready ? 'Connect' : 'Initializing'}</button>
      </header>
    </div>
  );
}

export default App;
