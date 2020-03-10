<!DOCTYPE html>
<!-- 

STOP!

This is a browser feature intended for developers. If someone told you to copy-paste something here to "hack" a website or admin account, it is a scam and will give them access to yours!. Learn more about "self-xss" at https://en.wikipedia.org/wiki/Self-XSS.

Don't be a Script Kiddie!

Best regards, H31iUMx49 (heinthanth)

-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="theme-color" content="#f2f7f8">
    <meta name="msapplication-navbutton-color" content="#f2f7f8">
    <meta name="apple-mobile-web-app-status-bar-style" content="#f2f7f8">

    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">

    @if(session('redirect'))
        <meta name="redirected-to" content="{{ session('redirect') }}">
    @endif

    <title>{{ isset($pagetitle) ? "$pagetitle - Hein Thanth" : "Hein Thanth" }}</title>
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Nunito:400,600|Megrim&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <header class="h3x-navbar">
        <a href="{{ route('home') }}" class="h3x-navbar-logo" data-render-me="true">H31N TH4NTH</a>
        <button class="h3x-sidenav-toggler" id="h3x-sidenav-toggler">
            <span class="h3x-sidenav-toggler-icon"></span>
        </button>
    </header>
    <div class="h3x-wrapper">
        <div class="h3x-page-scroll-progress"></div>
        <div class="h3x-row" id="main-container">
            <nav class="h3x-side-nav" id="h3x-side-nav" data-expanded="false">
                <ul>
                    @include('includes.nav')
                </ul>
                <div class="h3x-side-nav-divider"></div>
            </nav>
            <main id="main-content" data-render-state="show">
                <div id="mountpoint">
                    <div id="root">
                        @yield('main-content')
                    </div>
                </div>
                <footer><span class="h3x-svg-font"><img src="{{ asset('icons/cc.svg') }}" alt="Creative Common"></span> {{ date('Y') }} <span class="h3x-ht-changeable">Hein Thanth</span>. <a rel="license" class="h3x-color-black" href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA-4.0</a></footer>
            </main>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.19/jquery.touchSwipe.min.js" integrity="sha256-ns1OeEP3SedE9Theqmu444I44sikbp1O+bF/6BNUUy0=" crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    @section('add-js')
</body>
</html>
