import { Link } from "react-router-dom";
import ItemTable from "../../components/ItemTable";

function Cart({cart, removeFromCart}) {

    const showButton = cart.length !== 0 ? true : false;
   
    return (
        <main>
            <h2 className='text-center'>Cart</h2>
            {cart.length !==0 ?
                <ItemTable items={cart} isInCart={true} removeFromCart={removeFromCart} ></ItemTable>
                    :
                <h2 className='text-white text-center'>Won't you buy something? :( </h2>
            }
            <div className="buttonContainer">
            { showButton && <Link to ='/buy' className="btn btn-lg btn-warning fs-2 button">Buy</Link>}
            </div>

           
        </main>

    );
}

export default Cart;
