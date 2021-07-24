class Weather {
    constructor(city,state){
        this.apiKey = '';
        this.city = city;
        this.state = state;
    }
    // fetch weather from api 
    async getWeather(){
        console.log(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`)
        return await response.json();
    }
    changeLocation(city,state)
    {
        this.city = city;
        this.state = state;
    }
}