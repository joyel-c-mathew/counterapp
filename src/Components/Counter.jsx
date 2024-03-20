import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {

    /* hooks-usedispatch() it is used to dispatch calling the action */
    const dispatch = useDispatch()

// it is ued to access state in store
    const count = useSelector((state)=>state.counter.value)
    const[range,setrange]=useState("")
    return (

        <div className='d-flex justify-content-center align-items-center ' style={{ height: '50vh',marginTop:'20vh' }}>
            <div style={{ width: '400px', height: '300px' }} className="shadow border rounded border-primary p-3">

                <h1 className='text-center text-primary'> counter Application</h1>
                <h1 className='text-center'>{count}</h1> 


                <div className='mt-5 d-flex justify-content-evenly w-100'>

                    <button className='btn btn-success' onClick={()=>dispatch(increment(Number(range)))}>increment</button> 
                    <button className='btn btn-danger'  onClick={()=>dispatch(reset())}>Reset</button>
                    <button className='btn btn-warning'   onClick={()=>dispatch(decrement(Number(range)))}>decrement</button>
                </div>

                < input onChange={(e)=>setrange(e.target.value)} type="text" placeholder='range' className='form-control mt-4'/>
            </div>


        </div>

    )
}

export default Counter
