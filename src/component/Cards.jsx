import React, { useContext } from 'react'
import { productContext } from '../store/productStore'
import { Link } from 'react-router-dom'

const Cards = () => {
    const {products} = useContext(productContext)
  return (
    <>
      <h1 className='text-center font-italic mt-3 '>This is our Quality products</h1>
    <div className='d-flex flex-wrap my-5 align-items-center justify-content-evenly gap-5'>
      
      {products.map((product) => (
        <div className="card" style={{width: "18rem"}}>
  <img src={product.images[0]} className="card-img-top" alt="..." loading='lazy' onError={(e) => {
    e.target.src = "/images/default-product.png";
  }}/>
  <div className="card-body">
    <h4 className="card-title ">{product.title.slice(0,20)}...</h4>
    <small className='text-danger'>Category: {product.category}</small>
    <div className="card-text d-flex justify-content-between align-items-center  ">
       <p>{product.brand}</p>  ${product.price}
       </div>
   
  </div>
  <Link className=" mt-2 btn btn-dark w-100" to={`/details/${product.id}`}>read details
  </Link>
</div>
      ))}
    </div>
    
    </>
  )
}

export default Cards