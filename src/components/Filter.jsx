import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

export default function Filter({ slug, rating, setRating, price, setPrice }) {
    const [category, setCategory] = useState([]);
    const getCategory = () => {
        axios.get("https://dummyjson.com/products/categories").then(
            (success) => {
                setCategory(success.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    const fromChange = (event) => {
        setPrice({ ...price, from: event.target.value })
    }

    const toChange = (event) => {
        setPrice({ ...price, to: event.target.value })
    }



    useEffect(
        () => {
            getCategory()
        }, []
    )
    return (
        <div>
            <div className='p-1 mb-4'>
                <h1 className='text-2xl '>Filter by Rating</h1>
                <div onClick={() => setRating(4)} className={`border rounded-md my-4 p-2 px-3 flex gap-1 ${rating == 4 ? "bg-blue-950 text-white" : ""}`}>
                    4<span><FaStar className='text-yellow-300 mt-1' /></span>& above
                </div>
                <div onClick={() => setRating(3)} className={`border rounded-md mt-4 p-2 px-3 flex gap-1 ${rating == 3 ? "bg-blue-950 text-white" : ""}`}>
                    3<span><FaStar className='text-yellow-300 mt-1' /></span>& above
                </div>
                <div onClick={() => setRating(2)} className={`border rounded-md mt-4 p-2 px-3 flex gap-1 ${rating == 2 ? "bg-blue-950 text-white" : ""}`}>
                    2<span><FaStar className='text-yellow-300 mt-1' /></span>& above
                </div>
                <div onClick={() => setRating(1)} className={`border rounded-md mt-4 p-2 px-3 flex gap-1 ${rating == 1 ? "bg-blue-950 text-white" : ""}`}>
                    1<span><FaStar className='text-yellow-300 mt-1' /></span>& above
                </div>
            </div>

            <div className='p-1 mb-4'>
                <h1 className='text-2xl '>Filter by Price</h1>
                <div className='flex justify-between w-[230px]'>
                    <input onChange={fromChange} value={price.from} type="number" placeholder='from' className='w-20 p-2 rounded mt-4 ml-2 border' />
                    <span className='mt-6 text-xl'>to</span>
                    <input onChange={toChange} type="number" placeholder='to' value={price.to} className='w-20 p-2 rounded mt-4 border' />
                </div>
            </div>

            <div className='p-1'>
                <h1 className='text-2xl '>Filter by Category</h1>
                <Link to={'/shop'}>
                    <div className={`border rounded-md mt-4 p-2 px-3 ${slug == undefined ? "bg-blue-950 text-white" : ""}`}>
                        All Categories
                    </div>
                </Link>
                <div>{
                    category.map(
                        (categoryName, categoryIndex) => {
                            return (
                                <Link to={`/shop/${categoryName.slug}`}>
                                    <div className={`border rounded-md mt-2 p-2 px-3 ${categoryName.slug == slug ? "bg-blue-950 text-white" : ""}`}>
                                        {categoryName.name}
                                    </div>
                                </Link>
                            )
                        }
                    )

                }


                </div>
            </div>
        </div>
    )
}
