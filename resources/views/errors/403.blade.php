@extends('errors::layout')

@php $pagetitle = "Forbidden"; @endphp
@section('code', '0x193')
@section('message', __("I can't show you ... Just you're forbidden!"))