import { Link } from "react-router-dom";

function Item(props) {

    const itemInfos = props.itemInfos;
    const sellerPath = '/seller:'+itemInfos.sellerName;

    return ( 
        <div className="col-md mx-2 item-card card text-center">
            <div className="card-header text-center">
                {itemInfos.ItemName}
            </div>
            <div className="card-body">
                <img src={itemInfos.imageLink} alt="pic" className="card-img" />
                <hr />
                <div>{itemInfos.itemText}</div>
            </div>
            <div className="card-footer container-fluid">
                <div className="row">
                    <div className="col-3 bg-warning">
                        <img src={itemInfos.sellerAvatarLink} alt="" />
                    </div>
                    <div className="col-9 bg-danger">
                        <Link style={{textDecoration:'none' , color:'black'}} to={sellerPath}>{itemInfos.sellerName}</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Item;