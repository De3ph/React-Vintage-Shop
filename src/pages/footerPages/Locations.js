import mapImage from '../../images/map.jpg';

function Locations(){
    return(
        <main>
            <h2 className="text-center animate__animated animate__rotateInDownRight">Locations</h2>
            <div style={{textAlign : "center"}}>
                <img style={{height:"700px"}} src={mapImage} alt='map'/>
            </div>
        </main>
    );
}

export default Locations;