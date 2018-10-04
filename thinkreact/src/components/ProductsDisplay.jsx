import React from 'react'

const ProductDisplay = ({onChange, result, stockChange},props) => {
    return(
            <div>
                <input onChange={onChange} placeholder="Buscar producto..." name="product" type="text"/>
                <br/>  
                <input onChange={stockChange} type="checkbox"/><small>Only show products in stock</small>
                <br/>
                <br/>
               <div>
               Name
        
               Price
               
               </div>
               


            </div>
    )
}

export default ProductDisplay