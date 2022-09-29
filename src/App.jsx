import { useState } from "react";
import WeatherForm from "./api/components/WeatherForm";
import WeatherInfo from "./api/components/WeatherInfo";
import "./App.css";

function App() {
    const [place, setPlace] = useState("");

    const obtenerClima = (lugarObtenido) => {
        setPlace(lugarObtenido);
    };

    return (
        <div className="appContainer">
            {place === "" && (
                <h1 className="weatherPlace">Averigue el clima:</h1>
            )}

            <WeatherForm obtenerClima={obtenerClima} />

            {place != "" && <WeatherInfo place={place} />}
        </div>
    );
}

export default App;
