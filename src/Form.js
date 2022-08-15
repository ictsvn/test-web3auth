import React, { useState } from "react";
import FormText from "./FormText";

const FormData = (props) => {
  const { walletAddress, balance, loading, onLogout, onMint } = props;
  const [isCopy, setIsCopy] = useState(false);

  const onCopyAddress = async (value) => {
    await navigator.clipboard.writeText(value);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1500);
  };

  return (
    <div className="inputForm">
      <FormText
        value={walletAddress}
        onCopy={onCopyAddress}
        titleText="Walle Address"
      />
      <FormText
        value={balance}
        titleText="Balance"
      />
      <button className="buttonForm" onClick={onMint} disabled={loading} type="button">
        {loading ? 'Minting' : 'Mint'}
      </button>
      <button className="buttonForm" onClick={onLogout} type="button">
        Disconnect
      </button>
      {isCopy ? (
        <>
          <div className="text-right copyElement">
            <span>copied</span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default FormData;
