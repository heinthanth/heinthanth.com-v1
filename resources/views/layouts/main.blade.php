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

    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">

    <meta name="description" content="Personal Website of Hein Thanth. A Junior Web Artisan. Student at University Of Information Technology">
    <meta name="keywords" content="heinthanth, Hein Thanth, Hein Thant, Hein Thanth Maung Maung, Hein Thant Maung Maung, Hein Thanth Mg Mg, Hein Thanth Mg Mg, ဟိန်းသန့်, ဟိန်းသန့်မောင်မောင်, ဟိန်းသန့် မောင်မောင်, မောင်ဟိန်းသန့်, မောင်ဟိန်းသန့်မောင်မောင်, မောင်ဟိန်းသန့် မောင်မောင်, Helium, H31iUM, H31iUMx49">
    <meta name="author" content="Hein Thanth">
    <meta name="copyright"content="Hein Thanth">
    <meta property="og:title" content="Hein Thanth">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ URL::to('/') }}">
    <meta property="og:image" content="{{ asset('image/profile.jpg') }}">
    <meta property="og:description" content="Personal Website of Hein Thanth who loves cats and passionate about making something new and breaking stuffs!">
    <meta property="og:image:width" content="200">
    <meta property="og:image:height" content="200">
    <meta property="og:site_name" content="Hein Thanth">

    @if(session('redirect'))
        <meta name="redirected-to" content="{{ session('redirect') }}">
    @endif

    <title>{{ isset($pagetitle) ? "$pagetitle - Hein Thanth" : "Hein Thanth" }}</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
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
    <script src="{{ asset('js/app.js') }}"></script>

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140479987-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-140479987-2');
    </script>

    @section('add-js')
</body>
</html>
