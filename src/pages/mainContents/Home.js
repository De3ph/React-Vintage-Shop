import Hero from "../../components/Hero";
import AnimatedImage from "../../components/AnimatedImg";
import CityText from "../../components/CityText";
import cent from "../../images/99cent.jpg"
import store from "../../images/store.jpg"
import wall from "../../images/wall.jpg"

function Home() {

    let text1 = 'Since 2015 we have been introducing thousands of antique and vintage buyers to some of the best antique and vintage sellers in The World. We always strive to deliver a great experience for both our visitors and our exhibitors by combining great venues, a true mix of exhibitors, a friendly buzzing atmosphere with well organised, safe events.';
    let text2 = 'Buying and selling Vintage/Second-hand clothing is the ethically right thing to do. 100% RECYCLED, ANTI-LANDFILL, ANTI-SWEATSHOP, VERY LOW CARBON FOOTPRINT.';
    let text3 = 'Gold\'s Vintage Shope is a unique store. The store has a large collection of 100% authentic vintage, designer and streetwear items. These includes NBA, NFL, NHL jerseys, Nascar jackets, collectible tees, made in USA jeans, college sweatshirts and jackets, collaborations, and much more. All items are hand-picked and timeless.';

    let cityList = ['Paris','Kiev','Bucharest','Hamburg','Milano','Brussels','California','New York','Oslo','Manchester','London','Istanbul','Munich','Dortmund','Amsterdam','Rome','Moscow','St. Petersburg','Madrid','Ottowa'];


    return (

        <main>
            <AnimatedImage></AnimatedImage>

            <Hero image_link={cent} description_title="Best." description_text={text1}></Hero>
            <Hero image_link={store} description_title="Vintage." description_text={text2}></Hero>
            <Hero image_link={wall} description_title="Beauties." description_text={text3}></Hero>

            <CityText cityList={cityList}></CityText>
        </main>



    );
}

export default Home;
