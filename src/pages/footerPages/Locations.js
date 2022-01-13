
import shop1img from '../../images/shops/shop1.jpg';
import shop2img from '../../images/shops/shop2.jpg';
import shop3img from '../../images/shops/shop3.jpg';
import shop4img from '../../images/shops/shop4.jpeg';
import shop5img from '../../images/shops/shop5.jpeg';

let cityList = ['Paris','Kiev','Bucharest','Hamburg','Milano','Brussels','California','New York','Oslo','Manchester','London','Istanbul','Munich','Dortmund','Amsterdam','Rome','Moscow','St. Petersburg','Madrid','Ottowa'];


function Locations(){
    return(
        <main>
            <h2 className="text-center text-warning animate__animated animate__rotateInDownRight locationHeader">Locations</h2>
            <div className="cityImages">
                <h3>İstanbul</h3>
                <img src={shop1img} alt="" className="cityImage" />
                <h3>London</h3>
                <img src={shop2img} alt="" className="cityImage" />
                <h3>Paris</h3>
                <img src={shop3img} alt="" className="cityImage" />
                <h3>New York</h3>
                <img src={shop4img} alt="" className="cityImage" />
                <h3>Manchester</h3>
                <img src={shop5img} alt="" className="cityImage" />
            </div>
        </main>
    );
}

export default Locations;