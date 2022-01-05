import { Link } from "react-router-dom";

function Item({ itemInfos , addToCart }) {

  const sellerPath = '/seller:' + itemInfos.sellerName;

  return (
    <div className="col">
      <div className="card shadow-md">
        <img src={itemInfos.imageLink} alt="" />
        <div className="card-body">
          <p className="card-text text-dark">{itemInfos.itemText}</p>
          <div className="d-flex justify-content-around align-items-">
            <div className="d-flex gap-1">
              <Link to={sellerPath} > <button type="button" className="btn btn-sm btn-outline-dark">{itemInfos.sellerName}</button></Link>
              <button onClick={()=>{addToCart(itemInfos)}} type="button" className="btn btn-sm btn-outline-dark">Add to Cart</button>
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
