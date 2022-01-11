import { useEffect, useState } from "react";


function Item({ itemInfos , addToCart, isInCart}) {

  const buttonText = isInCart ? "Remove from cart" : "Add to cart";
 
  return (
    <div className="col">
      <div className="card shadow-md">
        <img src={itemInfos.imageLink} alt="" />
        <div className="card-body">
          <p className="card-text text-dark">{itemInfos.itemText}</p>
          <div className="d-flex justify-content-around align-items-">
            <div className="d-flex gap-1">
              <button type="button" className="btn btn-sm btn-outline-dark disabled text-dark">{itemInfos.sellerName}</button>
              <button onClick={()=>{addToCart(itemInfos)}} type="button" className="btn btn-sm btn-outline-dark">{buttonText}</button>
            </div>

          </div>
        </div>
        <div className="card-footer text-center">
          <small className="text-dark fs-5">{itemInfos.itemPrice}$</small>
        </div>
      </div>
    </div>
  );
}

export default Item;
