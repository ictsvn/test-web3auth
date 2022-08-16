import React, { useState } from "react";
import FormText from "./FormText";
import TheLoading from "./TheButton";

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
      <TheLoading
        loading={loading}
        mainName="Mint"
        subName="Minting..."
        onAction={onMint}
      />
      <TheLoading onAction={onLogout} mainName="Disconnect" />
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
