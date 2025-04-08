import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/MainContext';

export default function () {
    const { id } = useParams();
    console.log(id);
    const [currentProduct, setCurrentProduct] = useState([]);
    const {cart,setCart,toast}=useContext(Context);

    const getProductDetails = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then(
            (success) => {
                setCurrentProduct(success.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    const addToCart=()=>{
        
        const { id, category, price, title, thumbnail } = currentProduct;
        const productDetail = { id, category, price, title, thumbnail, qty: 1 }
        const finalData=[...cart,productDetail]
        setCart(finalData)
        toast.success("Product added successfully");
    }
    useEffect(
        () => {
            getProductDetails()
        }, []
    )
    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Product Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: Images */}
                <div>
                    <img
                        src={currentProduct.thumbnail}
                        alt="Product Main"
                        className="w-full h-auto rounded-lg shadow"
                    />
                    <div className="flex gap-3 mt-4">
                        {
                            currentProduct?.images?.map(
                                (imageData, imageIndex) => {
                                    return (
                                        <img
                                            src={imageData}
                                            alt="Thumb 1"
                                            className="w-16 h-16 rounded-lg cursor-pointer"
                                        />

                                    )
                                }
                            )
                        }
                    </div>
                </div>

                {/* Right: Details */}
                <div>
                    <h1 className="text-3xl font-bold">{currentProduct.title}</h1>
                    <p className="text-lg text-gray-700 mt-2">${currentProduct.price}</p>
                    <p className="text-yellow-500 mt-2">★★★★☆ ({currentProduct.rating})</p>
                    <p className="mt-4 text-gray-600">
                        {currentProduct.description}
                    </p>
                    <button onClick={addToCart} className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold">Customer Reviews</h2>
                <div className="mt-4 p-4 border rounded-lg shadow flex justify-between">
                    {
                        currentProduct?.reviews?.map(
                            (reviewData, reviewIndex) => {
                                return (
                                    <div className='mt-[20px]'>
                                        <p className="font-semibold">{reviewData.reviewerName}</p>
                                        <p className="text-yellow-500">★★★★☆</p>
                                        <p className="text-gray-700 mt-2">
                                            {reviewData.comment}
                                        </p>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}
