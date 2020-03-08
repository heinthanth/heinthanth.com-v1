@extends('errors::layout')

@php $pagetitle = "Internal Server Error"; @endphp
@section('code', '0x1F4')
@section('message', __("Ah ... it's my fault. Can you report me?"))
