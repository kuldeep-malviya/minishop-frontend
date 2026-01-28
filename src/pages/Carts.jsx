import React from 'react'

const Carts = () => {
  return (
    <div>
        <h1 className='my-4 text-center'>Items In your Cart.....</h1>
        <div className='bg-light w-75 mx-auto shadow-lg p-4 rounded-3'>

            <table class="table table-light">
                <thead>
                    <tr>
                        <th scope="col">
                            <img src ="../Images/Beauty.png" alt="not found" style={{width:"95px"}}/>
                         </th>
                         <th>
                            <h4>Product 1</h4>
                            <p>$ 120</p>
                         </th>
                         <th className=''>
                            <button className='btn btn-warning '>-</button>
                            <p className='d-inline mx-2'>1</p>
                             <button className='btn btn-success '>+</button>
                        </th>
                        <th>
                            <button className='btn btn-danger '>X</button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">
                            <img src="../Images/Camera.png" alt="not found" style={{width:"95px"}}/>
                         </th>
                         <th>
                            <h4>Product 2</h4>
                            <p>$410</p>
                         </th>
                         
                            <th className=''>
                            <button className='btn btn-warning '>-</button>
                            <p className='d-inline mx-2'>2</p>
                             <button className='btn btn-success '>+</button>
                        </th>
                        <th>
                            <button className='btn btn-danger '>X</button>
                        </th>

                         
                    </tr>
                </thead>
             </table>
        </div>
           <div className='text-center'>
             <h1 className='my-5'>Total Amount</h1>
            <button className='btn btn-dark px-5 my-3 '>CheckOut Now</button>
           </div>
    </div>
  );
};

export default Carts;
