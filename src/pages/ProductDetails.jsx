import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from  "axios"
import { IoMdStarOutline } from "react-icons/io";

const ProductDetails = () => {
  const [flag,setFlag] = useState(false)
  const [product,SetProducts] = useState({})
    const {id}=useParams();
    const stars =[ <IoMdStarOutline  className='text-warning'/>,
       <IoMdStarOutline  className='text-warning' />,
        <IoMdStarOutline  className='text-warning' />,
          <IoMdStarOutline  className='text-warning' />,
            <IoMdStarOutline  className='text-warning' />
       
       ]
    useEffect(()=> {
        const fetchProduct = async ()=>{
             const res= await axios.get(`https://minishop-frontend-2.onrender.com/products/${id}`)
            const data= await res.data
            setFlag(true)
            SetProducts(data)
            console.log(data)
        }
      fetchProduct()
    },[flag])
  return flag ? (
    
    
    <div className='row w-100 m-5'>
      <div className="col-md-5">
      
    <img className=' img-fluid w-100' src={product.images} alt={product.title} />
      </div>
      <div className="col-md-7">
    <h1>{product.title}</h1>
<br />
<hr />
    <h4 >rating :{product.rating}
      {stars.map((star,index)=> index <  product.rating-1 && star)}
    
   
   
   
    </h4>
      
    <p className='text-center'>{product.description}</p>
      </div>
    </div>
    
  ) : null;
};

export default ProductDetails
