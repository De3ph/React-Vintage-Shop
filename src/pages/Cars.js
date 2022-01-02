import ItemTable from "../components/ItemTable";

import car1 from '../images/vintageCars/car1.jpg'
import car2 from '../images/vintageCars/car2.jpg'
import car3 from '../images/vintageCars/car3.jpg'
import car4 from '../images/vintageCars/car4.jpg'
import car5 from '../images/vintageCars/car5.jpg'


function Cars() {

    let cars = [
        {
            'itemId': 0,
            'imageLink': car1,
            'itemText': '1965 Chevrolet Corvette',
            'sellerName': 'Yekta',
            'itemPrice': '69,000',
            'itemCategory': 'Car',
        },
        {
            'itemId': 1,
            'imageLink': car2,
            'itemText': '1958 Jaguar XK150',
            'sellerName': 'Ahmet',
            'itemPrice': '189,000',
            'itemCategory': 'Car',
        },
        {
            'itemId': 2,
            'imageLink': car3,
            'itemText': '1969 Chevrolet Camaro',
            'sellerName': 'Kamil',
            'itemPrice': '225,000',
            'itemCategory': 'Car',
        },
        {
            'itemId': 3,
            'imageLink': car4,
            'itemText': '1970 Oldsmobile 442',
            'sellerName': 'Hamit',
            'itemPrice': '46,500',
            'itemCategory': 'Car',
        },
        {
            'itemId': 4,
            'imageLink': car5,
            'itemText': '1967 Shelby GT500',
            'sellerName': 'Hamit',
            'itemPrice': '295,000',
            'itemCategory': 'Car',
        }
    ]

    return (
        <main>
            <h2 className="text-center pb-2 animate__animated animate__lightSpeedInLeft">Cars</h2>
            <ItemTable items={cars}></ItemTable>
        </main>
    );
}

export default Cars;