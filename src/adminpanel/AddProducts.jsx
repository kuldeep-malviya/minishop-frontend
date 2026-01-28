import React from 'react'

const AddProducts = () => {
  return (
    <div className='w-50 mx-auto'>
        <form action="">
            <input type="text" className="form-control my-3" placeholder='enter product' />
            <input type="text" className="form-control my-3" placeholder='enter product' />
            <input type="text" className="form-control my-3" placeholder='enter product' />
          <button className="btn btn-success px-3">Add Product</button>
        </form>
    </div>
  )
}

export default AddProducts