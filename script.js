let text = document.getElementById("text").addEventListener("change", (e) => {
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&appid=5d80b97a72209b827b3dd0047bf5b512`;
  getWeather(url);
  e.target.value = "";
});
let deg, max, min, disc, nm;

let getWeather = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  if (data.cod === "404") {
    alert("please enter correct city name");
  } else {
    deg = data.main.temp;
    max = data.main.temp_max;
    min = data.main.temp_min;
    disc = data.weather[0].description;
    nm = data.name;
    let name = document.getElementsByClassName("name")[0];
    let temp = document.getElementsByClassName("temp")[0];
    let max_min = document.getElementsByClassName("max_min")[0];
    let discription = document.getElementsByClassName("discription")[0];
    name.innerHTML = `${nm} (${data.sys.country})`;
    temp.innerHTML = `${deg} ${"&deg"}C`;
    discription.innerHTML = disc;
    max_min.innerHTML = `min:${min} ${"&deg"}C , max:${max} ${"&deg"}C`;
  }
};
