import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/MainContext'
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, setCart, toast } = useContext(Context);
    const [total, setTotal] = useState(0);
    const getTotal = () => {
        let totalPrice = 0;
        cart.forEach(
            (cartData, cartIndex) => {
                totalPrice = totalPrice + (cartData.price * cartData.qty)
            }
        );
        setTotal(totalPrice)
    }

    useEffect(
        () => {
            getTotal()
        }, [cart]
    )


    return (
        <div className="container mx-auto p-4 flex gap-6">
            {/* Left Side - Cart Items */}
            <div className="w-2/3 bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
                {
                    cart.length == 0
                        ?
                        <h1 className='text-center text-2xl mt-[20px]'>No Item Found</h1>
                        :
                        cart.map(
                            (cartData, cartIndex) => {
                                return (
                                    <CartRow key={cartIndex} cartData={cartData} cartIndex={cartIndex} cart={cart} setCart={setCart} toast={toast} />
                                )
                            }
                        )
                }

            </div>

            {/* Right Side - Summary */}
            <div className="w-1/3 bg-white shadow-lg rounded-lg p-4 h-fit">
                <h2 className="text-xl font-semibold mb-4">Summary</h2>
                <div className="flex justify-between text-gray-700 mb-2">
                    <p>Subtotal</p>
                    <p>${(total).toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-gray-700 mb-2">
                    <p>Tax</p>
                    <p>${(total * 10 / 100).toFixed(2)}</p>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                    <p>Total</p>
                    <p>${(total - (total * 10 / 100)).toFixed(2)}</p>
                </div>
                <button className="mt-4 w-full bg-blue-950 text-white px-6 py-2 rounded-md hover:bg-blue-900">
                    Checkout
                </button>
            </div>
        </div>
    )
}

function CartRow({ cartData, cartIndex, cart, setCart, toast }) {
    const deleteItem = (cartIndex) => {
        const oldData = [...cart];
        console.log(oldData)
        oldData.splice(cartIndex, 1)
        setCart(oldData);
        toast.success("Product removed successfully");
    }

    const updateQuantity=(event,cartIndex)=>{
        const newQty=event.target.value;
        const oldData=[...cart];
        if(oldData[cartIndex].qty>0){
        oldData[cartIndex].qty=newQty
        setCart(oldData)
        }
    }


    return (
        <div className="flex items-center gap-4 p-4 mb-4 border rounded-lg">

            <img
                src={cartData.thumbnail}
                alt="Random Product 1"
                className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
                <Link to={`/productdetails/${cartData.id}`}>
                    <h3 className="text-lg font-medium">{cartData.title}</h3>
                </Link>
                <p className="text-gray-500">Category: {cartData.category}</p>
                <p className="text-gray-600">${cartData.price} each</p>
                <div className='flex'>
                    <p className="text-gray-500 mt-2 mr-2">Quantity</p>
                    <input
                        type="number"
                        value={cartData.qty}
                        className="w-16 text-center border rounded-md mt-2"
                        min="1"
                        onChange={(event) => updateQuantity(event, cartIndex)}
                    />
                </div>
            </div>
            <button className="text-red-500" onClick={() => deleteItem(cartIndex)}>Remove</button>
        </div>
    )
}