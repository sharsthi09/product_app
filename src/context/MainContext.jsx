import React, { createContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const Context = createContext();

export default function MainContext({ children }) {

    const oldData = JSON.parse(localStorage.getItem("CART")) ?? [];
    const oldUser=localStorage.getItem('token')?? "";
    const [cart, setCart] = useState(oldData);
    const[user,setUser]=useState(oldUser);
    useEffect(
        () => {
            localStorage.setItem("CART", JSON.stringify(cart))
        }, [cart]
    )

    useEffect(
        ()=>{
            localStorage.setItem("token",user)
        },[user]
    )

    return (
        <>
            <Context.Provider value={{ cart, setCart, toast,user,setUser }}>
                {children}
            </Context.Provider>

            <Toaster
                position="bottom-right"
                reverseOrder={true}
                autoClose={1000}
            />
        </>
    )
}
