"use strict";
$(document).ready(function () {


    $(document).on('keypress' , function (e) { 
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("myWeather").val()}&appid=513b194a4d4d0e2122ea82011bd4137f&units=metric`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                $("#city").html(data.name)
                $("#temp").html(data.main.temp)
                $("#feels").html(data.main.feels_like)
                $("myWeather").val("")
                console.log(data);    
            }
            myweather()
        }
        
    })

    $(".btn").click(function (e) { 
        e.preventDefault()
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("myWeather").val()}&appid=012d3a58b4fd8ab58c50576d8d087fc1&units=metric`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                // $("#city").html(data.name)
                // $("#temp").html(data.main.temp)
                // $("#feels").html(data.main.feels_like)
                // $("myWeather").val("")
                console.log(data);    
            }
            myweather()
        
    });

});