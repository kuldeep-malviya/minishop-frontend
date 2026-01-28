import { createContext, useEffect, useReducer, useState } from "react"
import axios from 'axios'
const Reducer = (state,action)=>{
    switch (action.type) {
        case "set-products":
            return action.payload
            break;
        default:
            return state;
            break;
    }
}
export const productContext = createContext()
const ProductContextProvider = ({children}) => {
const [products,dispatch] = useReducer(Reducer,[])


useEffect(()=>{
    const fetchData =  async()=>{
        const res = await axios.get("http://dummyjson.com/products")
        console.log(res.data.products)
        dispatch({
            type:"set-products",
            payload:res.data.products
        })
    }
    fetchData()
},[])

  return (
    <productContext.Provider value={{
        products
    }}>
        {children}
    </productContext.Provider>
    
  )
}





export default ProductContextProvider