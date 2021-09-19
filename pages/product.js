import React from 'react'
import Navbar from '../components/Navbar';
import ProductDetails from '../components/Product';

function Product() {
    return (
        <div className="bg-grey-dark text-white">
            <Navbar />
            <ProductDetails />       
        </div>
    )
}

export default Product
