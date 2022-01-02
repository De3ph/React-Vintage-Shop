import Hero from "../components/Hero";
import cent from "../images/99cent.jpg"
import AnimatedImage from "../components/AnimatedImg";
function Home() {

    let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad esse, molestiae sunt incidunt iusto, voluptate, illo sapiente placeat illum vero veniam voluptatem ipsum?';
    return (

        <main>
            <AnimatedImage></AnimatedImage>
            
            <Hero image_link={cent} description_title="lorem23" description_text={text}></Hero>
            <Hero image_link={cent} description_title="lorem23" description_text={text}></Hero><Hero image_link={cent} description_title="lorem23" description_text={text}></Hero><Hero image_link={cent} description_title="lorem23" description_text={text}></Hero>
            
        </main>



    );
}

export default Home;