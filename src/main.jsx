
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CountDown from './CountDown.jsx'
import RedPacket from './RedPacket.jsx'
import Grid from './Grid.jsx'
import './index.css'
import React, { useState } from 'react';


function Home() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const components = ['RedPacket', 'CountDown', 'Grid']

  if (selectedComponent === 'RedPacket') {
    return <RedPacket setSelectedComponent={setSelectedComponent}/>;
  } else if (selectedComponent === 'CountDown') {
    return <CountDown />;
  } else if (selectedComponent === 'Grid') {
    return <Grid />;
  } 

  return (
    <div>
      <h1>选择一个组件进入</h1>
      <div>
        {components.map((component, index)=>(
          <button key={index} onClick={()=>setSelectedComponent(component)}>
            点击进入{component}
          </ button>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
