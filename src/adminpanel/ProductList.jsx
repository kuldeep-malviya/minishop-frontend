import React, { useContext } from 'react'
import { productContext } from '../store/productStore'

const ProductList = () => {
  const {products} = useContext(productContext)
  return (
    <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Brand</th>
    </tr>
  </thead>
  <tbody>
   {
    products.map((product)=>(
       <tr>
      <th scope="row">{product.id}</th>
      <td>{product.title}</td>
      <td>{product.brand}</td>
      <td>${product.price}</td>
    </tr>
    ))
   }
    
  </tbody>
</table>
    </>
  )
}

export default ProductList