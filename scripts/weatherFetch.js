
const h1El = document.getElementById('testScript')
const apiKey = '3b1450fc2cf02f3c6fdcfa78f0c49954'
console.log(h1El)

h1El.textContent = 'What up'

const getWeather = () => {
axios({
    method: 'get',
    url: `https://api.openweathermap.org/data/3.0/onecall?lat=41.4371583&lon=-81&appid=${apiKey}`
  })
    .then(function (response) {
      console.log(response)
    });
}
getWeather()