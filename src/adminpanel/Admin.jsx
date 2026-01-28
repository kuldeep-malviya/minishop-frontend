import React, { useState } from 'react'
import ProductList from './ProductList'
import AddProducts from './AddProducts'

const Admin = () => {
  const [isAdd,setIsAdd] = useState(true)
 const productHandler = ()=>{
    setIsAdd(false)
  }
  return (
    <>
    <h1 className='text-center my-5'>welcome to admin</h1> <hr />
    <a onClick={productHandler} className="btn btn-success px-4 mx-3
    ">Add</a>
   
      {(isAdd? <AddProducts/>:<ProductList/>)}
       
      
    
    
    </>
  )
}

export default Admin