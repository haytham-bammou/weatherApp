const ui = new UI;
const storage = new Storage;
const weatherLocation = storage.getLocationData();

const weather  = new Weather(weatherLocation.city,weatherLocation.state);

document.addEventListener('DOMContentLoaded',getweather)
document.getElementById('w-change-btn').addEventListener('click' ,(e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changeLocation(city, state);
    storage.setLocationData(city, state);
    getweather();
    // close the modal
    $('#locModal').modal('hide'); 
})

function getweather() {
    weather.getWeather()
        .then(res => {
            ui.paint(res)
        })
        .catch((err)=> console.log(err));
}