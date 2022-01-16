import { useState } from "react";


function Item({ itemInfos, addToCart, isInCart, removeFromCart }) {

  const buttonText = isInCart ? "Remove from cart" : "Add to cart";
  const cartToggle = isInCart ? removeFromCart : addToCart;

  const [showText, setShowText] = useState(true);

  return (

    <div className="container">
      <div className="col h-100 ">
        <div className="col-lg-12 h-100 ">
          <div className="item-card card shadow-md h-100 " onMouseEnter={() => setShowText(false)} onMouseLeave={() => setShowText(true)}>
            <img src={itemInfos.imageLink} alt="" />
            <div className="card-body">
              {showText && <p className="card-text">{itemInfos.itemText}</p>}
              <div className="d-flex justify-content-around align-items-center">
                {!showText && <small className="text-ligth fs-5 text-center">{itemInfos.itemPrice}$</small>}
              </div>
            </div>
            <div className="card-footer d-flex gap-1 justify-content-center">
              {!showText && <button onClick={() => { cartToggle(itemInfos) }} type="button" className="btn btn-md btn-outline-warning">{buttonText}</button>}
              {showText && <button className="btn btn-md invisible btn-outline-warning">{buttonText}</button>}
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Item;
