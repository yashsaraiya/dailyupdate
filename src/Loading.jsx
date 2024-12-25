import React from 'react'
import Spinner from "./spinner2.gif"
const Loading =()=>{
  
    return (<>
      <div className='text-center'><img src={Spinner} alt="spinner" /></div>
      </>
    )
}
export default Loading