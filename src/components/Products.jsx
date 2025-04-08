import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../context/MainContext';
import { toast } from 'react-toastify/unstyled';

export default function Products({ slug, rating, price }) {
    const [allProducts, setAllProducts] = useState([]);
    const [limit, setLimit] = useState(30);
    const [loading, setLoading] = useState(false);
    const { cart, setCart, toast } = useContext(Context);

    const getData = () => {
        let apiUrl;
        if (slug == undefined) {
            apiUrl = `https://dummyjson.com/products?limit=${limit}`;
        }
        else {
            apiUrl = `https://dummyjson.com/products/category/${slug}?limit=${limit}`;
        }

        axios.get(apiUrl).then(
            (success) => {
                const finalProduct = success.data.products.filter(
                    (productData, productIndex) => {
                        if (productData.rating >= rating && productData.price >= price.from && productData.price <= price.to) {
                            return true;
                        }
                    }
                )
                setAllProducts(finalProduct)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    useEffect(
        () => {
            setLoading(true)
            getData()

            setTimeout(
                () => {
                    setLoading(false)
                }, 1000
            )
        }, [slug, limit, rating, price]
    )
    return (
        <>
            <h1 className='m-4 font-bold'>Total Products: {allProducts.length}</h1>
            <div className="flex flex-wrap gap-4 justify-center p-2">
                {
                    allProducts.map(
                        (productData, productIndex) => {
                            return loading == true
                                ?
                                (
                                    <div className="w-64 p-4 border border-gray-200 rounded-lg shadow-lg animate-pulse">
                                        <div className="w-full h-40 bg-gray-300 rounded-md"></div>
                                        <div className="mt-4 space-y-2">
                                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                        </div>
                                        <div className="mt-4 h-10 bg-gray-300 rounded w-full"></div>
                                    </div>)
                                :
                                (
                                    <Cards productData={productData} productIndex={productIndex} cart={cart} setCart={setCart} toast={toast} />
                                )
                        }
                    )
                }
            </div>
            <div className='text-center mt-6'>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-5" onClick={() => setLimit(limit + 20)}>Load More</button>
            </div>
        </>
    )
}

function Cards({ productData, cart, setCart, productIndex, toast }) {

    const addToCart = () => {
        const { id, category, price, title, thumbnail } = productData;
        const productDetail = { id, category, price, title, thumbnail, qty: 1 }
        const matchCardData = cart.filter(
            (cardData, cardIndex) => {
                return cardData.id == productDetail.id
            }
        )
        if (matchCardData.length == 0) {
            const finalData = [...cart, productDetail]
            setCart(finalData)
            toast.success("Product added successfully");
        }else{
            toast.error("Product already added");   
        }

    }
    return (
        <div className="w-72 rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <Link to={`/productdetails/${productData.id}`}>
                <img
                    src={productData.thumbnail}
                    alt="Sample Product"
                    className="w-full h-55 object-cover"
                />
                <div className="p-4 pb-0">
                    <p className="text-sm text-gray-500 uppercase">{productData.category}</p>
                    <h3 className="text-lg font-semibold mt-1">{productData.title}</h3>
                    <div className="flex justify-left items-center mt-3 gap-3">
                        <span className="text-xl font-bold">${productData.price}</span>
                        <span className="text-yellow-500">({productData.rating}/5)</span>
                    </div>
                </div>
            </Link>
            <button onClick={addToCart} className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-5 m-4">Add to Cart</button>
        </div>
    )
}
