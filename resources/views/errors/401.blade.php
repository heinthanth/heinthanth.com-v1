@extends('errors::layout')

@php $pagetitle = "Unauthorized"; @endphp
@section('code', '0x191')
@section('message', __("Access Denied!"))