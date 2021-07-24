class UI {
    constructor()
    {
        this.location = document.getElementById('w-location')
        this.temp = document.getElementById('w-temp')
        this.tempMax = document.getElementById('w-tempMax')
        this.tempMin = document.getElementById('w-tempMin')
        this.feelsLike = document.getElementById('w-feels-like')
        this.humidity = document.getElementById('w-humidity')
        this.icon = document.getElementById('w-icon')
        this.description = document.getElementById('w-desc')
    }
    paint(weather)
    {
        this.location.textContent = weather.name;
        this.temp.textContent ='temperature : ' + parseInt( parseFloat(weather.main.temp) - 273.15);
        this.tempMax.textContent = 'temperature Max : ' + parseInt( parseFloat(weather.main.temp_max) - 273.15);
        this.tempMin.textContent = 'temperature Min : ' +  parseInt( parseFloat(weather.main.temp_min) - 273.15);
        this.feelsLike.textContent = 'feels like : ' + parseInt( parseFloat(weather.main.feels_like) - 273.15);
        this.humidity.textContent = 'humidity : ' +  weather.main.humidity;
        this.description.textContent = weather.weather[0].description;
        
    }
}