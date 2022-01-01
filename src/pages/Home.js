import Hero from "../components/Hero";
import bird from '../images/bird.svg'

function Home() {

    let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad esse, molestiae sunt incidunt iusto, voluptate, illo sapiente placeat illum vero veniam voluptatem ipsum?';
    return (

        <main>
            <Hero image_link={bird} description_title="lorem23" description_text={text}></Hero>
            <Hero image_link={bird} description_title="lorem23" description_text={text}></Hero><Hero image_link={bird} description_title="lorem23" description_text={text}></Hero><Hero image_link={bird} description_title="lorem23" description_text={text}></Hero>
            

        </main>



    );
}

export default Home;