@extends('layouts.main')

@section('main-content')
<section id="about" class="h3x-section">
    <img src="{{ asset('image/profile.jpg') }}" id="profile-picture" alt="Hein Thanth" class="h3x-img-responsive">
    <h1 class="h3x-section-title">WHO AM I</h1>
    <p>As you know, <q>Hein Thant Maung Maung</q> is my legal full name. But to be unique, I took <q>Hein Thanth</q> as a nickname. Love cats and passionate about making something new and breaking stuffs!</p>
    <a href="{{ route('about') }}" class="h3x-more-info-link" data-render-me="true">read more about me</a>
</section>
<section id="skills" class="h3x-section h3x-text-align-right">
    <img src="{{ asset('image/undraw_hacker_mind.svg') }}" alt="Hein Thanth" class="h3x-img-responsive">
    <h1 class="h3x-section-title">WHAT CAN I DO</h1>
    <p class="h3x-text-align-right">Since I've learned Web Development since the age of 13/14, I have enough experience on Web standard and workflow. and can code in Python, C/C++, Java and have intermediate knowledge and experience on Linux</p>
    <a href="{{ route('skills') }}" class="h3x-more-info-link" data-render-me="true">explore more in details</a>
</section>
{{-- <section id="article" class="h3x-section">
    <h1 class="h3x-section-title">MY RECENT ARTICLES</h1>
    <div class="h3x-article-container">
        <div class="h3x-article-preview">
            <img src="{{ asset('image/profile.jpg') }}" alt="" class="h3x-article-preview-image">
            <div class="h3x-article-preview-content">
                <h2 class="h3x-article-preview-title">Article One</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim exercitationem odit maiores tenetur ...</p>
                <a href="#" class="h3x-more-info-link">continue this article</a>
            </div>
        </div>
        <div class="h3x-article-preview">
            <img src="{{ asset('image/undraw_hacker_mind.png') }}" alt="" class="h3x-article-preview-image">
            <div class="h3x-article-preview-content">
                <h2 class="h3x-article-preview-title">Article Two</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim exercitationem odit maiores tenetur ...</p>
                <a href="#" class="h3x-more-info-link">continue this article</a>
            </div>
        </div>
    </div>
</section> --}}
{{-- <section id="portfolio" class="h3x-section">
    <h1 class="h3x-section-title">MY RECENT PROJECTS</h1>
    <div class="h3x-project-preview">
        <img src="{{ asset('image/profile.jpg') }}" alt="" class="h3x-project-preview-image">
        <div class="h3x-project-preview-content">
            <h2 class="h3x-project-preview-title">Project One</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim exercitationem odit maiores tenetur ...</p>
            <a href="#" class="h3x-more-info-link">explore this project</a>
        </div>
    </div>
    <div class="h3x-project-preview">
        <img src="{{ asset('image/profile.jpg') }}" alt="" class="h3x-project-preview-image">
        <div class="h3x-project-preview-content">
            <h2 class="h3x-project-preview-title">Project Two</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim exercitationem odit maiores tenetur ...</p>
            <a href="#" class="h3x-more-info-link">explore this project</a>
        </div>
    </div>
</section> --}}
<section id="contact" class="h3x-section">
    <h1 class="h3x-section-title">GET IN TOUCH WITH ME</h1>
    <p>You can use <a href="#" class="h3x-more-info-link"> this form</a> to contact with me! Or reach me via - </p>
    <ul class="h3x-contact-social-link">
        @include('includes.social')
    </ul>
</section>
@endsection