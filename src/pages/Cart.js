import { useState } from 'react'

function Cart() {

    const [cart, setCart] = useState(0);

    

    return (
        <main>
            <div>Cart</div>
            <div>{cart}</div>
            <button onClick={()=>{setCart(cart+1)}}>btt</button>
        </main>

    );
}

export default Cart;