$(document).ready(function(){

    var apiKey="475e1e1ad088c2c133cae8a3f647ccf5";
    var name= $('#name');
    var temp= $('#temp');
    var description= $('#description');
    var time= $('#time');
    var icon=$('#icon');
    var humidity=$('#humidity');

    $('#mybutton').click(function(){

        let zipcode = $('#zipcode').val();

        if (zipcode != ''){

            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "&appid=475e1e1ad088c2c133cae8a3f647ccf5&units=imperial",
                success: function(data) {
                    let data1=data;
                    console.log(data);
                    name.html(data1.name);
                    description.html(data1.weather[0].description);
                    let icon1 = data1.weather[0].icon
                    let img= $('<img>').attr('src', 'http://openweathermap.org/img/wn/' + icon1 + '@2x.png');
                    icon.html(img);
                    temp.html(Math.floor(data1.main.temp) + " &deg; F");
                    humidity.html("Humidity: " + Math.floor(data1.main.humidity) + "&#37");

                    $.ajax({
                        url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon="+ data.coord.lon + "&appid=475e1e1ad088c2c133cae8a3f647ccf5&units=imperial",
                        success: function(data) {
                            let data2=data;

                            let datetime=
                            moment().tz(data2.timezone).format('dddd') + ', ' +
                            moment().tz(data2.timezone).format('hh:mm z');
                            time.html(datetime);   
                            console.log(data);
                        }
                    });       
                }
            });

        }else{
            $('#error').html('field cannot be empty');
        }
        console.log(zipcode);
    })

});


