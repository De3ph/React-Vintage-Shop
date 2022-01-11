import ItemTable from '../../components/ItemTable';
import {WallArts_datas} from '../../db/WallArts_datas'

function WallArts({addToCart, cart}) {

    return ( 
        <main>
            <h1 className="text-center animate__animated animate__jello">WallArts</h1>
            <ItemTable addToCart={addToCart} items={WallArts_datas} cart ={cart}></ItemTable>
        </main>
     );
}

export default WallArts;