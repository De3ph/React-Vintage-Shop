import React from 'react'

const CityText = ({ cityList }) => {

    let cities = "";


    cityList.forEach((city, i) => {
        cities = cities.concat(city, " ");
    });


    return (
        <main className='container-fluid mb-3'>
            <div className="FlowingText cities">
                <p className='display-1 city-text'> {cities} </p>
            </div>
        </main>
    )
}

export default CityText;
