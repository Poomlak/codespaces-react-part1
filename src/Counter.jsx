import React ,{useState} from 'react';
import './Counter.css'
export default function Counter(){
    const [count,setCount] = useState(0)
    const [value,setValue]=useState("Type here!");
    const onTextChange=(e)=>{
        setValue(e.target.value);
    }
    return(<>
    <input
            type="text"
            value={value}
            onChange={e=>onTextChange(e)}
    />
        <h3>{value.length}</h3>

    <button onClick={()=>setCount(count + 1)}>
        Click me
    </button>
    <button onClick={()=>setCount(0)}>
        Reset
    </button>
    <p>You Clicked {count} Times</p>
    </>);
}