// Forecast.io url with key https://api.forecast.io/forecast/8188d2efca90a6f6a9a9b53f07280a0f/37.8267,-122.423

if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position) {
    // creates variables for lat and lon
    var lat = position.coords.latitude;
    var lon = position.coords.longitude
    //dispalys lat and lon
    $("#data").html("latitude: " + lat + "<br>longitude: " + lon); 
  });
}

function getIcon(){
  if (data.currently.icon == "partly-cloudy-night"){
    var iconURL = "http://res.cloudinary.com/dpyptkefp/image/upload/v1473417675/cloudy_1_jydugx.png"
  }
};

function getWeather(){

            var apiKey = '8188d2efca90a6f6a9a9b53f07280a0f';
            var url = 'https://api.forecast.io/forecast/';
            var lati = 39.77;
            var longi = -86.15;
            var data;

            $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
              //console.log(data);
              $('#weather').html(Math.round(data.currently.temperature) + "°F");
              $('#conditions').html(data.currently.summary);
              //if statement to select right icon - could not figure out how to do this with a javascript object because icon names from forecast.io has dashes in it
              if (data.currently.icon == "partly-cloudy-day"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473420467/partycloudy_wdnbaf.png')      
              } else if (ata.currently.icon == "clear-day"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473420650/Sunny_bb9hea.png') 
              } else if (ata.currently.icon == "clear-night"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473420823/clearnight_rdofup.png') 
              } else if (ata.currently.icon == "rain"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421027/rain_dvzcrm.png') 
              } else if (ata.currently.icon == "sleet"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421294/sleet_yo5wms.png') 
              } else if (ata.currently.icon == "fog"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421411/fog_y9tcew.png') 
              } else if (ata.currently.icon == "partly-cloudy-night"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421302/partlycloudynight_h3exfn.png') 
              } else if (ata.currently.icon == "snow"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421294/snow_e8jd8a.png') 
              } else if (ata.currently.icon == "cloudy"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421860/cloudy_wwcrdq.png') 
              } else if (ata.currently.icon == "wind"){
              $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421294/wind_stnlkv.png') 
              }
              
            });
        }


//runs the getWeather function on page load
$(document).ready(function(){
  
  getWeather();
});
