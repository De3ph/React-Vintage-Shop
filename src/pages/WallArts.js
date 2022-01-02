import ItemTable from '../components/ItemTable';
import store from '../images/store.jpg';

function WallArts() {

    let items = [{
        'itemId': 0,
        'imageLink': store,
        'itemText': 'Vintage Cup',
        'sellerName': 'Hamit',
        'itemPrice': 7.35,
        'itemCategory':'Drink',
    }]

    return ( 
        <main>
            Wall Arts

            

            <ItemTable items={items}></ItemTable>
        </main>
     );
}

export default WallArts;