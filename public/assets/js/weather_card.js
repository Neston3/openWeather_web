function retrieveWeather(){
    $.ajax({
        url: config.routes.weatherRetrieve,
        type: "get",
        dataType: "json",
        success: function (data) {
            drawCards(data);
        }
    });
}

function drawCards(data) {
    var row_container = document.getElementById("main_div");
    // Clear previous contents of the container
    while (row_container.hasChildNodes()) {
        row_container.removeChild(row_container.lastChild);
    }

    var weather_list = data.list;
    weather_list.forEach(function (item,index,data) {

        // card div outer
        var div_col_sm = document.createElement("div");
        div_col_sm.setAttribute("class", "col-sm-4");
        // div_.id = 'zoom';

        // card div outer
        var div_card = document.createElement("div");
        div_card.setAttribute("class", "card");
        div_card.id = 'zoom';

        /*image*/
        var image = document.createElement("img");
        image.setAttribute("src", config.img.pin);
        image.style.marginLeft = '5%';
        image.style.marginTop = '10%';
        image.style.width = '10%';
        /*end image*/

        /*card body*/
        var div_card_body = document.createElement("div");
        div_card_body.setAttribute("class", "card-body");

        /*h5*/
        var h5 = document.createElement('h5');
        h5.setAttribute('class', 'card-title');
        h5.style.marginTop = '-5%';
        h5.style.marginBottom = '10%';
        h5.append(weather_list[index].name);

        var hr = document.createElement('hr');


        /*image wind*/
        var image_wind = document.createElement("img");
        image_wind.setAttribute("src", config.img.wind);
        image_wind.style.marginLeft = '2%';
        image_wind.style.marginRight = '5%';
        image_wind.style.width = '8%';
        /*end image*/

        /*p_wind*/
        var p_wind = document.createElement('p');
        p_wind.setAttribute('class', 'card-text');
        p_wind.style.marginLeft = '20%';
        p_wind.style.marginTop = '-10%';
        p_wind.append('Wind: '+weather_list[index].wind.speed+'Km/hr');
        /*p_wind*/

        /*p_water*/
        var p_water = document.createElement('p');
        p_water.setAttribute('class', 'card-text');
        p_water.style.marginLeft = '20%';
        p_water.style.marginTop = '-10%';
        p_water.append('Humidity: '+weather_list[index].main.humidity+'%');
        /*p_water*/

        /*image_water*/
        var image_water = document.createElement("img");
        image_water.setAttribute("src", config.img.water);
        image_water.style.marginLeft = '2%';
        image_water.style.marginRight = '5%';
        image_water.style.width = '8%';
        /*end image_water*/

        /*p_pressure*/
        var p_pressure = document.createElement('p');
        p_pressure.setAttribute('class', 'card-text');
        p_pressure.style.marginLeft = '20%';
        p_pressure.style.marginTop = '-10%';
        p_pressure.append('Air pressure: '+weather_list[index].main.pressure+' hpa');
        /*p_pressure*/

        /*image_pressure*/
        var image_pressure = document.createElement("img");
        image_pressure.setAttribute("src",config.img.pressure);
        image_pressure.style.marginLeft = '2%';
        image_pressure.style.marginRight = '5%';
        image_pressure.style.width = '8%';
        /*end image_pressure*/


        /*appending*/
        div_card.appendChild(image);
        div_card_body.appendChild(h5);

        div_card_body.appendChild(hr);

        div_card_body.appendChild(image_wind);
        div_card_body.appendChild(p_wind);

        div_card_body.appendChild(image_water);
        div_card_body.appendChild(p_water);

        div_card_body.appendChild(image_pressure);
        div_card_body.appendChild(p_pressure);

        div_card.appendChild(div_card_body);
        div_col_sm.appendChild(div_card);
        row_container.appendChild(div_col_sm);


    });
}
