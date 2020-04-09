<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OpenWeatherController extends Controller
{

    public function retrieveWeather(Request $request)
    {
        if ($request->ajax()){

            $url = "http://api.openweathermap.org/data/2.5/group?id=152219,152265,152376&units=metric&appid=581940f79fe716d2946e07985c025d9a";
            $response = file_get_contents($url);

            return json_decode($response,true);
        }
    }

}
