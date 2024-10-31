// app.js
// Sample data for initial testing (Replace with real data later)
const weatherData = {
    temperature: 25,
    humidity: 60,
    rainfall: 0
};

// Function to update weather data on the page
function updateWeatherData(data) {
    document.getElementById("temperature").textContent = data.temperature;
    document.getElementById("humidity").textContent = data.humidity;
    document.getElementById("rainfall").textContent = data.rainfall;
}

// Call the function to update weather data on page load
updateWeatherData(weatherData);
