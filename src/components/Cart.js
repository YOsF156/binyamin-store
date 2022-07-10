import { useContext } from "react"
import CartContext from "../Context/CartContext"

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);

    return <div>
        <h1>Cart : </h1>
        {cart.map(i => {
            return <div className="itemCart">
                <h4>{i.title}</h4>
                <img src={i.image} alt="" />
                <h5>{i.price}</h5>
            </div>
        })}
    </div>
}