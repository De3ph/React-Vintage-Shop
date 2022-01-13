import ItemTable from "../../components/ItemTable";
import {GiftCard_datas} from "../../db/GiftCard_datas"

function GiftCard({addToCart}) {

    return (
        <main>
            <h2 className="text-center text-warning pb-2 animate__animated animate__lightSpeedInLeft">GiftCard</h2>
            <ItemTable addToCart={addToCart} items={GiftCard_datas}></ItemTable>
        </main>
    );
}

export default GiftCard;
