import React, { useState } from "react";
import FormText from "./FormText";
import Button from "./Button";

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
      <FormText value={balance} titleText="Balance" />
      <Button
        loading={loading}
        label={loading ? "Minting..." : "Mint"}
        onAction={onMint}
      />
      <Button onAction={onLogout} label="Disconnect" />
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
