import Item from "./Item";

function ItemTable({items}) {  

    return (
        <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xxl-4 g-3">
        
        {items.map((item)=>{
            return <Item itemInfos={item} key={item.Itemid} />
        })}
      </div>
    </div>
  </div>
    );
}

export default ItemTable;