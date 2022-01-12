import ItemTable from "../../components/ItemTable";

function Cart({cart, removeFromCart}) {

    return (
        <main>
            <h2 className='text-center'>Cart</h2>
            {cart.length !==0 ?
                <ItemTable items={cart} isInCart={true} removeFromCart={removeFromCart} ></ItemTable>
                    :
                <h2 className='text-white text-center'>Won't you buy something? :( </h2>
            }
        </main>

    );
}

export default Cart;
