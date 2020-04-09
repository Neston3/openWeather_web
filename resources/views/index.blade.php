<!DOCTYPE html>
<html lang="en">
<head>
    <title>openWeather API</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{--page css--}}
    <link rel="stylesheet" href="{{asset('assets/css/floating_card.css')}}">

    {{--bootstrap--}}
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"></script>

    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

    <style>
        #top_image{
            background-image: url('{{asset('assets/img/top_image.jpg')}}');
        }
    </style>


</head>
<body>

<div class="jumbotron text-center" id="top_image">
    <h1>openWeather API</h1>
</div>

<div class="container">
    <div class="row" id="main_div">
    </div>
</div>

</body>

<script src="{{asset('assets/js/weather_card.js')}}"></script>


<script>
    $(document).ready(function () {
        retrieveWeather();
    });


    let config = {
        token: '{{ csrf_token() }}',
        routes: {
            weatherRetrieve: '{{route('retrieve-weather')}}',

        },
        img: {
            pin: '{{asset('assets/img/pin.png')}}',
            wind: '{{asset('assets/img/wind.png')}}',
            water:'{{asset('assets/img/water.png')}}',
            pressure:'{{asset('assets/img/meter.png')}}'
        }
    };


</script>
</html>
