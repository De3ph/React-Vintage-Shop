import Item from "./Item";

function ItemTable(props) {

    // const items = props.items;
    let items = [{
        'Itemid': 0,
        'ItemName': 'cup',
        'imageLink': 'asddsa',
        'itemText': 'Vintage Cup',
        'sellerAvatarLink': 'dsa',
        'sellerName': 'Hamit',
        'itemCategory':'Drink'
    }]

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