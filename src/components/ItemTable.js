import { useEffect } from "react";
import Item from "./Item";

function ItemTable({items , addToCart, isInCart}) {

  

    return (
        <div className="item-table album py-5">
           <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xxl-4 g-3">
                 {items.map((item)=>{
                   return <Item addToCart={addToCart} itemInfos={item} key={item.itemId} isInCart = {isInCart}/>
        })}
              </div>
           </div>
      </div>
    );
}

export default ItemTable;
