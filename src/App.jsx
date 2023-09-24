import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

  const onClickHandler = ()=>{
    window.alert("get money!");
  };

  return (
    <div className="redPacket" onClick={onClickHandler}> 点击领取 </div>
  )
}

export default App;
