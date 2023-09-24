import { useEffect, useState } from 'react';
import './App.css';

function RedPacket({setSelectedComponent}) {
  const [amount, setAmount] = useState(null);
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const onClickHandler = ()=>{
    setAmount(10);
    setOpen(true);
    setOpened(true);
  };

  const onClickClose = ()=>{
    setOpen(false);
  }

  
    return (
      <div>
        <div className={`redPacket ${opened? "opened" : ""}`} onClick={onClickHandler}>
            点击打开红包
        </div>
        {open && (
            <div className="modal">
                <div className="modalContent">
                    <span>红包金额：¥{amount}</span>
                    <button onClick={onClickClose}>关闭</button>
                </div>
            </div>
        )}
        <button onClick={()=>setSelectedComponent(null)}> 后跳 </ button>
      </div>
    );

}

export default RedPacket;