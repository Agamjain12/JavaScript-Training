async function getWeather() {
    const apiKey = '0ade9b1ef43b4b4898973314232411'; 
    const city = 'katni'; 
  
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
      }
  
      const weatherData = await response.json();
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  
  function displayWeatherInfo(data) {
    const temperatureCelsius = data.current.temp_c;
    const temperatureFahrenheit = data.current.temp_f;
    const description = data.current.condition.text;
  
    console.log(`Temperature: ${temperatureCelsius.toFixed(2)} °C / ${temperatureFahrenheit.toFixed(2)} °F`);
    console.log(`Description: ${description}`);
  }
  
  
  getWeather();
  