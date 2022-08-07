import React from 'react';
import '../App.css';
const products = [
'iphone',
'nokia',
'samsung'
]
export const ProductList = (props) => {
    return (
     <div>
     {products.map((product,index) => (
        <div className='phoneName'>{product}</div>
     ))}
     </div>
    )
        
}