import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const [buttonText, setButtonText] = useState("Place Order")
    
    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }
    
    const cartTotal = 5.99 * cartItems.length
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: ${cartTotal}</p>
            <div className="order-button">
                {   cartItems.length === 0
                    ? <h2>Cart Empty</h2>
                    : <button onClick={() => placeOrder()}>{buttonText}</button>
                }
            </div>
        </main>
    )
}

export default Cart