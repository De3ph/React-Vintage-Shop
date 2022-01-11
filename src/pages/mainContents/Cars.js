import ItemTable from "../../components/ItemTable";
import {Car_datas} from "../../db/Car_datas";

function Cars({addToCart}) {



    return (
        <main>
            <h2 className="text-center pb-2 animate__animated animate__lightSpeedInLeft">Cars</h2>
            <ItemTable addToCart={addToCart} items={Car_datas}></ItemTable>
        </main>
    );
}

export default Cars;