// Forecast.io url with key https://api.forecast.io/forecast/8188d2efca90a6f6a9a9b53f07280a0f/37.8267,-122.423

//creating global variables for lattitude and longitude - will later change these in geolocation function but I think I have to set them outside so they are global
var lat =0;
var lon=0;

if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position) {
    // sets lat and lon variables to be used in api call 
    lat = position.coords.latitude;
    lon = position.coords.longitude
  });
}

//function to send forecast.io api call and retrieve weather data and also include if/else statement to pull the weather icon that matches the conditions
function getWeather(){

            var apiKey = '8188d2efca90a6f6a9a9b53f07280a0f';
            var url = 'https://api.forecast.io/forecast/';
            var data;

            $.getJSON(url + apiKey + "/" + lat + "," + lon + "?callback=?", function(data) {
              //console.log(data);
            var temp =  data.currently.temperature; $('#weather').html(Math.round(temp) + "°F");
              $('#conditions').html(data.currently.summary);
              //if statement to select right icon - could not figure out how to do this with a javascript object because icon data from forecast.io has dashes in it
              if (data.currently.icon == "partly-cloudy-day"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473420467/partycloudy_wdnbaf.png')      
              } else if (data.currently.icon == "clear-day"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473420650/Sunny_bb9hea.png') 
              } else if (data.currently.icon == "clear-night"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473420823/clearnight_rdofup.png') 
              } else if (data.currently.icon == "rain"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421027/rain_dvzcrm.png') 
              } else if (data.currently.icon == "sleet"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421294/sleet_yo5wms.png') 
              } else if (data.currently.icon == "fog"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421411/fog_y9tcew.png') 
              } else if (data.currently.icon == "partly-cloudy-night"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421302/partlycloudynight_h3exfn.png') 
              } else if (data.currently.icon == "snow"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421294/snow_e8jd8a.png') 
              } else if (data.currently.icon == "cloudy"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421860/cloudy_wwcrdq.png') 
              } else if (data.currently.icon == "wind"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421294/wind_stnlkv.png') 
              }
              
            });
        }


//runs the getWeather function on page load
$(document).ready(function(){
  
  getWeather();
  $('#check').html(temp);
});
//click temperature to switch units between C and F
$('#weather').click(function(){
  $('#weather').html(Math.round((((data.currently.temperature)-32) * 5/9)) + "°C");
})
