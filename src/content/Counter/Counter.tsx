import React, {useState} from 'react';

const Counter = () => {
    const [state, setState]=useState(0);
    const [currentN, setCurrentN]=useState('1');
    const OneChange = (value:number) => {
        setState(prev=>prev+value)
    }
    return (
        <div>
          <div>
              {state}
          </div>
          <div>
                <button onClick={()=>OneChange(+1)}>Plus 1</button>
                <button onClick={()=>OneChange(-1)}>Minus 1</button>
          </div>
          <div>
                <button onClick={()=>OneChange(+93)}>Plus what</button>
                <button onClick={()=>OneChange(-34)}>Minus what</button>
          </div>
            <div>
                <input type="text" value={currentN} onChange={(e)=>setCurrentN(e.target.value)}></input>
                <button onClick={()=>OneChange(parseInt(currentN))}>иссус христос</button>
            </div>
        </div>
    );
};

export default Counter;