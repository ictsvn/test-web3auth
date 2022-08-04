import React, { useCallback, useState } from "react";
import { ReactComponent as CopyIcon } from "./copy-icon.svg";
import FormText from "./FormText";

const Title = (props) => <div className="title">{props.label}</div>;

const Row = (props) => (
  <div className={`row ${props.className || ""}`}>{props.children}</div>
);

const InputForm = (props) => {
  const { label, value, onValueChanged } = props;
  const onChange = useCallback(
    (e) => {
      onValueChanged(e.target.value);
    },
    [onValueChanged]
  );
  return (
    <Row>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Title label={label} />
        </div>
        <div className="col-span-4 sm:col-span-2">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={value}
            onChange={onChange}
            type="text"
          />
        </div>
      </div>
    </Row>
  );
};

const FormData = (props) => {
  const { walletAddress, onSign, onLogout } = props;
  const [tokenAddress, setAddress] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tokenId, setId] = useState("");
  const [isCopy, setIsCopy] = useState(false);

  const onSignClicked = useCallback(() => {
    onSign({ tokenAddress, from, to, tokenId });
  }, [tokenAddress, from, to, tokenId, onSign]);

  const onCopyAddress = async (value) => {
    await navigator.clipboard.writeText(value);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1500);
    // alert("copied");
  };

  return (
    <div className="inputForm">
      <FormText
        value={walletAddress}
        onCopy={onCopyAddress}
        titleText="Walle Address"
      />
      <InputForm
        label="Token Address:"
        value={tokenAddress}
        onValueChanged={setAddress}
      />
      <InputForm label="From:" value={from} onValueChanged={setFrom} />
      <InputForm label="To:" value={to} onValueChanged={setTo} />
      <InputForm label="Token ID:" value={tokenId} onValueChanged={setId} />
      <button className="buttonForm" onClick={onSignClicked} type="button">
        Sign
      </button>
      <button className="buttonForm" onClick={onLogout} type="button">
        Logout
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
