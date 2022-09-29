export const API__CALL = (place) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=9429c33c9ff59a8496568f827940d700`
    );
};
