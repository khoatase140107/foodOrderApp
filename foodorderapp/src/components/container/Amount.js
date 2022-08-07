import React, {useState} from 'react'
import '../../App.css'
export default function Amount() {
  const [counter,setCounter] = useState(0)
  const handleCounter = () => {
    setCounter(counter + 1)
  }
  return (
    <div className='amount' 
    style={{
        padding:'0px 24px',
        textAlign:'center',
    }}>
    <p>Amount : {counter}</p>
    <button
    onClick={handleCounter}
    className='btn-add'
    style={{
      textAlign:'center',
        width:'80px',
        height:'32px',
        backgroundColor:'rgb(139,69,19)',
        color:'white',
        borderRadius:'12px',
        border:'1px solid black'
        }}
    >
    +Add
    </button>
    </div>
  )
}
