import { useEffect, useState } from 'react';
import './App.css';

function CountDown() {
  const [count, setCount] = useState(10);
  useEffect(()=>{
    if (count > 0){
      const timer = setTimeout(()=>{
        setCount(count - 1);
      }, 1000);

      return ()=> clearTimeout(timer);
    }
  }, [count]);
  return(
    <div>
      <h1> {count} </ h1>
      <p> {count == 0 && <p> Time is Up</ p>} </ p>
    </ div>
  );
}

export default CountDown;