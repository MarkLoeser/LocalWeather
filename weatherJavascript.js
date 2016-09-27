//Forecast.io url with key https://api.forecast.io/forecast/8188d2efca90a6f6a9a9b53f07280a0f/37.8267,-122.423


   navigator.geolocation.getCurrentPosition(function(position) {
    // sets lat and lon variables to be used in api call 
   var lat = position.coords.latitude;
   var lon = position.coords.longitude;
   
   function getWeather(){

   var apiKey = '8188d2efca90a6f6a9a9b53f07280a0f';
   var url = 'https://api.darksky.net/forecast/';
   var data;
   var units = "°F"
            

   $.getJSON(url + apiKey + "/" + lat + "," + lon + "?callback=?", function(data) {
            
   var temp =  data.currently.temperature; 
              
   $('#weather').html(Math.round(temp) + units);
              
                                          $('#conditions').html(data.currently.summary);
            //can uncomment and add element with id=position to html to display position to make sure it's working   
            // $('#position').html(lat + " " + lon);
              
         // switch case to pick weather icon based off the data
            switch (data.currently.icon){
              case "partly-cloudy-day":
                $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473420467/partycloudy_wdnbaf.png');
                break;
              case "clear-day":
                $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473420650/Sunny_bb9hea.png');  
                break;
              case "clear-night":
                $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473420823/clearnight_rdofup.png');
                break;
              case "rain":
                $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421027/rain_dvzcrm.png');
                break;
              case "sleet":
                $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421294/sleet_yo5wms.png');
                break;
              case "fog":
                $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421411/fog_y9tcew.png');
                break;
              case "partly-cloudy-night":
                $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421302/partlycloudynight_h3exfn.png');
                break;
              case "snow":
                $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421294/snow_e8jd8a.png');
                break;
              case "cloudy":
                $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421860/cloudy_wwcrdq.png');
                break;
              case "wind":
                $("#icon").attr('src', 'http://res.cloudinary.com/dpyptkefp/image/upload/v1473421294/wind_stnlkv.png');
                break;
              default:
                $("#icon").attr('src', "http://ih0.redbubble.net/image.92064828.0090/sticker,375x360.u3.png");      
          }

          $("#weather").click(function(){
            if (units == "°F") {
              units = "°C";
              $('#weather').html(Math.round((temp-32)*5/9) + units);
            } else {
              units = "°F";
              $('#weather').html(Math.round(temp) + units);
            }
      
    });
       
      
              
              
            });
        } 


//runs the getWeather function on page load
$(document).ready(function(){
  
  getWeather();
});
     

   
   
   
   
   
   
   
   
  });


