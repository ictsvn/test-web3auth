import { Web3Auth } from "@web3auth/web3auth";
import Web3 from "web3";
import { ethers } from "ethers";

import "./App.css";
import FormData from "./Form";
import { useCallback, useEffect, useState } from "react";
import FormText from "./FormText";

const ethAbi = require("ethereumjs-abi");

const abi = require("./abi.json");

function App() {
  const [web3auth] = useState(
    new Web3Auth({
      clientId: process.env.REACT_APP_CLIENT_ID,
      chainConfig: {
        chainNamespace: "eip155",
        chainId: process.env.REACT_APP_CHAIN_ID,
      },
    })
  );

  const [ready, setReady] = useState(false);
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [dataHash, setDataHash] = useState("");
  const [signature, setSignature] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [balance, setBalance] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const onConnect = useCallback(async () => {
    await web3auth.connect();

    const web3 = new Web3(web3auth.provider);
    const fromAddress = (await web3.eth.getAccounts())[0];
    setWalletAddress(fromAddress);
    const balance = await web3.eth.getBalance(fromAddress);
    setBalance(Number(web3.utils.fromWei(balance, "ether")).toFixed(6) + " ETH");

    setConnected(true);
  }, [web3auth]);

  const onLogout = useCallback(() => {
    web3auth.logout().then(() => {
      setConnected(false);
    });
  }, [web3auth]);

  const onMint = useCallback(async () => {
    try {
      setLoading(true);
      const provider = new ethers.providers.Web3Provider(web3auth.provider);
      const signer = provider.getSigner();
      const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS || '';
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const tx = await contract.mint();
      await tx.wait();
      setLoading(false);
      window.open(process.env.REACT_APP_EXPLORER);
    } catch (err) {
      setLoading(false);
    }
  }, [web3auth.provider])

  const onSign = useCallback(
    async (info) => {
      const web3 = new Web3(web3auth.provider);
      const method = process.env.REACT_APP_METHOD_ID;
      const { tokenAddress, from, to, tokenId } = info;

      const dataHash = ethAbi.soliditySHA3(
        ["bytes4", "address", "address", "address", "uint256"],
        [method, tokenAddress, from, to, tokenId]
      );
      const hashString = `0x${dataHash.toString("hex")}`;

      const signedMessage = await web3.eth.personal.sign(
        hashString,
        walletAddress
      );
      setDataHash(hashString);
      setSignature(signedMessage);

      if (dataHash && signedMessage) {
        setShowModal(true);
      }
    },
    [web3auth.provider, walletAddress]
  );

  useEffect(() => {
    web3auth
      .initModal()
      .then(() => setReady(true))
      .catch(window.alert);
  }, [web3auth]);

  const onCopyAddress = async (value) => {
    await navigator.clipboard.writeText(value);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1500);
  };

  return (
    <div className="App">
      <header className="App-header">
        {connected ? (
          <FormData
            walletAddress={walletAddress}
            balance={balance}
            onMint={onMint}
            onLogout={onLogout}
            loading={loading}
          />
        ) : ready ? (
          <button className="buttonForm" onClick={onConnect} type="button">
            {"Connect"}
          </button>
        ) : (
          "Loading..."
        )}
      </header>
      {showModal ? (
        <>
          <div className="m-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                    <FormText
                      value={dataHash}
                      onCopy={onCopyAddress}
                      titleText="dataHash"
                    />
                  </div>
                  <div>
                    <FormText
                      value={signature}
                      onCopy={onCopyAddress}
                      titleText="signature"
                    />
                  </div>
                </div>
                {isCopy ? (
                  <>
                    <div className="text-right copyElement mt-3">
                      <span>copied</span>
                    </div>
                  </>
                ) : null}
                {/*footer*/}
                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default App;
