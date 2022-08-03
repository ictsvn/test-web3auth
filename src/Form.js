import React, { useCallback, useState } from 'react';

const Title = (props) => <div className='title'>{props.label}</div>

const Row = (props) => <div className={`row ${props.className || ''}`}>{props.children}</div>

const InputForm = (props) => {
  const { label, value, onValueChanged } = props;
  const onChange = useCallback((e) => {
    onValueChanged(e.target.value);
  }, [onValueChanged])
  return (
    <Row>
      <Title label={label} />
      <input className='input' value={value} onChange={onChange} type="text" />
    </Row>
  )
}

const FormData = (props) => {
  const { walletAddress, onSign, onLogout } = props;
  const [tokenAddress, setAddress] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [tokenId, setId] = useState('');

  const onSignClicked = useCallback(() => {
    onSign({ tokenAddress, from, to, tokenId })
  }, [tokenAddress, from, to, tokenId, onSign])

  return (
    <div className='inputForm'>
      <Row className="header">
        <Title label="Walle Address" />
        <span className='address'>{walletAddress}</span>
      </Row>
      <InputForm label="Token Address:" value={tokenAddress} onValueChanged={setAddress} />
      <InputForm label="From:" value={from} onValueChanged={setFrom} />
      <InputForm label="To:" value={to} onValueChanged={setTo} />
      <InputForm label="Token ID:" value={tokenId} onValueChanged={setId} />
      <button onClick={onSignClicked} type="button">Sign</button>
      <button onClick={onLogout} type="button">Logout</button>
    </div>
  )
}

export default FormData;
