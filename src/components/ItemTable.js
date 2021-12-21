import Item from "./Item";

function ItemTable(props) {

    // const items = props.items;
    let items = [{
        'ItemName': 'cup',
        'imageLink': 'asddsa',
        'itemText': 'Vintage Cup',
        'sellerAvatarLink': 'dsa',
        'sellerName': 'Hamit',
        'Itemid': 0
    }, {
        'ItemName': 'cup',
        'imageLink': 'asddsa',
        'itemText': 'Vintage Cup',
        'sellerAvatarLink': 'dsa',
        'sellerName': 'Hamit',
        'Itemid': 1
    }, {
        'ItemName': 'cup',
        'imageLink': 'asddsa',
        'itemText': 'Vintage Cup',
        'sellerAvatarLink': 'dsa',
        'sellerName': 'Hamit',
        'Itemid': 2
    }, {
        'ItemName': 'cup',
        'imageLink': 'asddsa',
        'itemText': 'Vintage Cup',
        'sellerAvatarLink': 'dsa',
        'sellerName': 'Hamit',
        'Itemid': 3
    }, {
        'ItemName': 'cup',
        'imageLink': 'asddsa',
        'itemText': 'Vintage Cup',
        'sellerAvatarLink': 'dsa',
        'sellerName': 'Hamit',
        'Itemid': 4
    }]
    
    let end = 3;
    let start = 0;

    
    let createRow = (arg)=>{
        let a = <div className="row my-2 gy-3">{
            arg.map((argItem)=>{
                return <Item itemInfos={argItem} key={argItem.Itemid}></Item>
            })
        }</div>

        return a;
    }

    return (
        <div className="container">
            {createRow(items.slice(0,3))}
            {createRow(items.slice(3,8))}
        </div>
    );
}

export default ItemTable;

// return <Item className='col-sm-4' itemInfos={item} key={item.Itemid}></Item>