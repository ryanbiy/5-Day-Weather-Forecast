const API_KEY = 'c6730a2cb34bd567e39522cb4f11e3cf';

function getWeather() {
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const days = data.list.filter(weather => weather.dt_txt.includes('12:00:00'));
      for (let i = 0; i < 5; i++) {
        const day = days[i];
        const date = new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
        const temperature = Math.round(day.main.temp);
        const description = day.weather[0].description;
        const dayElement = document.getElementsByClassName('day')[i];
        dayElement.querySelector('.day-name').textContent = date;
        dayElement.querySelector('.weather-statement').textContent = description;
        dayElement.querySelector('.temp').textContent = `${temperature}°C`;
      }
    })
    .catch(error => {
      console.error(error);
    });
}