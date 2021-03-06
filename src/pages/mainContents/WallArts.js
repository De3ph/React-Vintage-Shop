import ItemTable from '../../components/ItemTable';
import {WallArts_datas} from '../../db/WallArts_datas'

function WallArts({addToCart}) {

    return ( 
        <main>
            <h1 className="text-center text-warning animate__animated animate__jello">WallArts</h1>
            <ItemTable addToCart={addToCart} items={WallArts_datas}></ItemTable>
        </main>
     );
}

export default WallArts;