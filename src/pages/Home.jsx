import React, { useContext } from 'react'
import { productContext } from '../store/productStore'
import Cards from '../component/Cards'

const Home = () => {
  const {products} = useContext(productContext)
  return (
    
     <Cards/>
  )
}

export default Home