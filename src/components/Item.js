import { Link } from "react-router-dom";

function Item(props) {

    const itemInfos = props.itemInfos;
    const sellerPath = '/seller:' + itemInfos.sellerName;

    return ( 
        <div class="col">
          <div class="card shadow-md">
            <img src={itemInfos.imageLink} alt="" />
            <div class="card-body">
              <p class="card-text">{itemInfos.itemText}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {/* <button type="button" class="btn btn-sm btn-outline-dark"><Link className="text-dark " to={sellerPath}>{itemInfos.sellerName}</Link></button> */}
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