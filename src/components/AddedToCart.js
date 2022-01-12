import successImg from "../images/successImg.png"

const AddedToCart = ({removeAddedToCart}) => {
    return ( 
        <div className="addToCart card text-center addedToCart ">
            <img src={successImg} className = "card-img-top" alt="success img"/>
            <div class="card-body">
                 <h3 class="card-title">Success!</h3>
                 <p class="card-text">You have successfully added the item into your cart.</p>
                <button onClick={removeAddedToCart} class="btn btn-sm btn-outline-dark">Keep Shopping</button>
           </div>
        </div>
     );
}
 
export default AddedToCart;