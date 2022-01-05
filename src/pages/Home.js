import Hero from "../components/Hero";
import AnimatedImage from "../components/AnimatedImg";
import CityText from "../components/CityText";
import cent from "../images/99cent.jpg"
import store from "../images/store.jpg"
import wall from "../images/wall.jpg"

function Home() {

    let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad esse, molestiae sunt incidunt iusto, voluptate, illo sapiente placeat illum vero veniam voluptatem ipsum?';

    let cityList = ['Paris','Kiev','Bucharest','Hamburg','Milano','Brussels','California','New York','Oslo','Manchester','London','Istanbul','Munich','Dortmund','Amsterdam','Rome','Moscow','St. Petersburg','Madrid','Ottowa'];





    return (

        <main>
            <AnimatedImage></AnimatedImage>

            <Hero image_link={cent} description_title="Best." description_text={text}></Hero>
            <Hero image_link={store} description_title="Vintage." description_text={text}></Hero>
            <Hero image_link={wall} description_title="Beauties." description_text={text}></Hero>

            <CityText cityList={cityList}></CityText>
        </main>



    );
}

export default Home;
