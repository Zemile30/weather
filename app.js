"use strict";
$(document).ready(function () {


    $(document).on('keypress' , function (e) { 
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("myWeather").val()}&appid=012d3a58b4fd8ab58c50576d8d087fc1&units=metric`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                console.log(data);
                
            }
        }
        
    });

});