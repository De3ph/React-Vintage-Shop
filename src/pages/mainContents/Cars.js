import ItemTable from "../../components/ItemTable";
import {Car_datas} from "../../db/Car_datas";

function Cars({addToCart}) {

    return (
        <main>
            <h1 className="text-center text-warning pb-2 animate__animated animate__lightSpeedInLeft">Cars</h1>
            <ItemTable addToCart={addToCart} items={Car_datas}></ItemTable>
        </main>
    );
}

export default Cars;