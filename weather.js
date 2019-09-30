class Weather {
  constructor(city, country) {
    this.apiKey = "f8724289dd061a6303b0396c3f44d82f";
    this.city = city;
    this.country = country;
  }

  //! Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }

  //!change location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
