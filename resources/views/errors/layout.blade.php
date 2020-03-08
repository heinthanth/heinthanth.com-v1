@extends('layouts.main')

@section('main-content')
<div class="h3x-error-container">
	<h1 class="h3x-error-status">@yield('code')</h1>
	<p class="h3x-error-info">@yield('message')</p>
</div>
<style>main { flex: 100%!important; margin-top: 0px; margin-bottom: 0px; height: 100%; display: flex; align-items: center;} #mountpoint { width: 100%; } @media (min-width: 992px) { .h3x-side-nav {flex: 0%; display: none} }</style>
@endsection