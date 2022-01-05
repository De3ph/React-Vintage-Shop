import { useEffect } from "react";
import ItemTable from "../components/ItemTable";

function Cart({cart}) {

    useEffect(() => {
        console.log(cart);
      }, [cart])

    return (
        <main>
            <h2 className='text-center'>Cart</h2>
            {cart.length !==0 ?
                <ItemTable items={cart} ></ItemTable>
                    :
                <h2 className='text-white text-center'>Won't you buy something? :( </h2>
            }
        </main>

    );
}

export default Cart;
