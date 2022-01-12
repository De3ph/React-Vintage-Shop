import ItemTable from "../../components/ItemTable";
import {Furniture_datas} from '../../db/Furniture_datas'

function Furniture({addToCart}) {
    return ( 
        <main>
            <h1 className="text-center animate__animated animate__rotateInDownRight">Furniture</h1>
            <ItemTable addToCart={addToCart} items={Furniture_datas}></ItemTable>
        </main>
     );
}

export default Furniture;