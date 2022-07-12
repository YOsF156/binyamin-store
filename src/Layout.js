import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from "react-router-dom"
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import CartContext from './Context/CartContext';

export default function Layout({ setIsLogged }) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({})
    console.log("🚀 ~ file: Layout.js ~ line 11 ~ Layout ~ user", user)

    const handleLogout = () => {
        setIsLogged(localStorage.clear())
    }



    useEffect(() => {
        async function getMyDetails() {
            const res = await fetch('http://localhost:3001/api/users/my-details', {
                method: 'GET',
                headers: { Authorization: `bearer ${localStorage.atLogin}` }
            });
            const data = await res.json();
            setUser(data)
        }
        getMyDetails()
    }, [])








    return <div>
        <label> hello <b>{user.firstName} </b></label><button onClick={handleLogout}>Log-out</button>
        <Header />

        <CartContext.Provider value={{ cart, setCart }}>
            <Main />
            <Cart />
        </CartContext.Provider>
    </div>;
}