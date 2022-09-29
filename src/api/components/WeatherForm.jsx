import React, { useEffect, useState } from "react";

const WeatherForm = (props) => {
    const [weatherPlace, setWeatherPlace] = useState("");
    console.log(weatherPlace, props);
    const getPlace = (event) => {
        const { value } = event.target;
        setWeatherPlace(value);
    };

    const validarDatos = (event) => {
        event.preventDefault();
        if (
            weatherPlace != null &&
            weatherPlace != " " &&
            weatherPlace.length > 3
        ) {
            props.obtenerClima(weatherPlace);
        }
    };
    return (
        <div className="formContainer">
            <form action="" className="form">
                <input
                    className="formInput"
                    type="text"
                    onBlur={getPlace}
                    placeholder="Ingrese el lugar"
                />
                <button
                    type="submit"
                    onClick={validarDatos}
                    className="formBtn"
                >
                    Obtener clima
                </button>
            </form>
        </div>
    );
};

export default WeatherForm;
