import React, {useState, useCallback} from 'react'
import Child from './Child'

export default function Parent() {
    const [count, setCount] = useState(0);
    console.log("Parent component re-rendered");

    const handleCallBack = useCallback(() => {
        console.log('Function executed..');

    }, []);
    
  return (
    <div>
        <button onClick = {() => setCount(count + 1)}>
            Change the state- {count}

        </button>
        <Child handler={handleCallBack} />
    </div>
  )
}
