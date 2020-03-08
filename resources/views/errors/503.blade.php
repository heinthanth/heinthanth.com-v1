@extends('errors::layout')

@php $pagetitle = "Under Maintenance"; @endphp
@section('code', '503')
@section('message', __("Sorry, this website is under maintenance for a while. But it won't take longer, trust me! 😉"))
