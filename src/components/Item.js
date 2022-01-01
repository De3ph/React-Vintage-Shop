import { Link } from "react-router-dom";

function Item(props) {

    const itemInfos = props.itemInfos;
    const sellerPath = '/seller:' + itemInfos.sellerName;

    return ( 
        <div className="col">
          <div className="card shadow-md">
            <img src={itemInfos.imageLink} alt="" />
            <div className="card-body">
              <p className="card-text">{itemInfos.itemText}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to={sellerPath} > <button type="button" className="btn btn-sm btn-outline-dark">{itemInfos.sellerName}</button> </Link>
                  <button type="button" class="btn btn-sm btn-outline-dark">Add to Cart</button>
                </div>
                <small class="text-muted">{itemInfos.ItemName}</small>
              </div>
            </div>
          </div>
        </div>
     );
}

export default Item;