import React, { useEffect, useState } from "react";

const WeatherInfo = (props) => {
    const [weatherInfo, setWeatherInfo] = useState([]);
    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${props.place}&appid=9429c33c9ff59a8496568f827940d700&units=metric`
        )
            .then((res) => res.json())
            .then((data) => setWeatherInfo(data.main))
            .catch((res) => setWeatherInfo(res));
    }, [props.place]);
    console.log(weatherInfo);

    console.log(`Weather info recibio: ${props.place}`);
    return (
        <div className="weatherInfoContainer">
            <div>
                {weatherInfo === undefined ? (
                    ""
                ) : (
                    <h1 className="weatherPlace">
                        ¿Como esta el clíma en {props.place}?
                    </h1>
                )}
            </div>

            {weatherInfo === undefined ? (
                <h1 className="weatherError">
                    No ha sido posible encontrar esa ubicación :(
                </h1>
            ) : (
                <div className="infoContainer">
                    <div className="dataContainer">
                        <span className="dataTitles">Sensación térmica: </span>

                        {weatherInfo.feels_like != " " && (
                            <span className="dataDesc">
                                {weatherInfo.feels_like} °C
                            </span>
                        )}
                    </div>
                    <div className="dataContainer">
                        <span className="dataTitles">Humedad: </span>

                        {weatherInfo.humidity != null && (
                            <span className="dataDesc">
                                {weatherInfo.humidity}
                            </span>
                        )}
                    </div>
                    <div className="dataContainer">
                        <span className="dataTitles">Presión:</span>

                        {weatherInfo.pressure && (
                            <span className="dataDesc">
                                {weatherInfo.pressure}
                            </span>
                        )}
                    </div>
                    <div className="dataContainer">
                        <span className="dataTitles">Temperatura: </span>
                        {weatherInfo.temp && (
                            <span className="dataDesc">
                                {weatherInfo.temp} °C
                            </span>
                        )}
                    </div>
                    <div className="dataContainer">
                        <span className="dataTitles">Temperatura máxima:</span>
                        {weatherInfo.temp_max && (
                            <span className="dataDesc">
                                {weatherInfo.temp_max} °C
                            </span>
                        )}
                    </div>
                    <div className="dataContainer">
                        <span className="dataTitles">Temperatura minima:</span>
                        {weatherInfo.temp_min && (
                            <span className="dataDesc">
                                {weatherInfo.temp_min} °C
                            </span>
                        )}
                    </div>
                </div>
            )}
            {/*             <div className="infoContainer">
                <div className="dataContainer">
                    <span className="dataTitles">Sensacion termica: </span>

                    {weatherInfo.feels_like != " " && (
                        <span className="dataDesc">
                            {weatherInfo.feels_like} °C
                        </span>
                    )}
                </div>
                <div className="dataContainer">
                    <span className="dataTitles">Humedad: </span>

                    {weatherInfo.humidity != null && (
                        <span className="dataDesc">{weatherInfo.humidity}</span>
                    )}
                </div>
                <div className="dataContainer">
                    <span className="dataTitles">Presion:</span>

                    {weatherInfo.pressure && (
                        <span className="dataDesc">{weatherInfo.pressure}</span>
                    )}
                </div>
                <div className="dataContainer">
                    <span className="dataTitles">Temperatura: </span>
                    {weatherInfo.temp && (
                        <span className="dataDesc">{weatherInfo.temp} °C</span>
                    )}
                </div>
                <div className="dataContainer">
                    <span className="dataTitles">Temperatura maxima:</span>
                    {weatherInfo.temp_max && (
                        <span className="dataDesc">
                            {weatherInfo.temp_max} °C
                        </span>
                    )}
                </div>
                <div className="dataContainer">
                    <span className="dataTitles">Temperatura minima:</span>
                    {weatherInfo.temp_min && (
                        <span className="dataDesc">
                            {weatherInfo.temp_min} °C
                        </span>
                    )}
                </div>
            </div> */}
        </div>
    );
};

export default WeatherInfo;
