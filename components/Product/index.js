import React from 'react';
import ShirtModel from './ShirtModel';
import Footer from '../Footer';

let shirtDetails = {
    price: 43.00,
    description: "One of the nicest shirts we have in stock, we're sure you'll love it. It's a great shirt for a great price. Purchase it today for the low price of $",
    title: "The Classic!"
}

function ProductDetails() {
    return (
        <>
            <section className="text-gray-400 bg-grey-dark body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Threadrop</h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-4">{shirtDetails.title}</h1>
                            <div className="flex mb-4">
                                <a className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                                <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">Reviews</a>
                                <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">Details</a>
                            </div>
                            <p className="leading-relaxed mb-4">{shirtDetails.description + shirtDetails.price}.00</p>
                            <div className="flex border-t border-gray-800 py-2">
                                <span className="text-gray-500">Color</span>
                                <span className="ml-auto text-white">Blue</span>
                            </div>
                            <div className="flex border-t border-gray-800 py-2">
                                <span className="text-gray-500">Size</span>
                                <span className="ml-auto text-white">Medium</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                                <span className="text-gray-500">Quantity</span>
                                <span className="ml-auto text-white">1</span>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-white">${shirtDetails.price}.00</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Purchase!</button>
                            </div>
                        </div>
                        <ShirtModel />
                    </div>
                </div>
            </section>
            <Footer />
            　
        </>
    )
}

export default ProductDetails
