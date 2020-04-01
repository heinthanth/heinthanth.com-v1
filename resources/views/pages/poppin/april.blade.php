@extends('layouts.main')

@section('main-content')
<section id="april-fool" class="h3x-section h3x-section-single">
    <h1 class="h3x-section-title">April Fool Message</h1>
    <p>Welcome, drop some messages, as April Fool, anonymously or not!</p>
    <form id="AprilFoolMessageForm" class="h3x-form h3x-ajax-form" autocomplete="off">
        <div class="h3x-form-group">
            <label for="name">What's Your Name:</label>
            <input type="text" id="name" name="name" class="h3x-input-disable-on-nav" placeholder="Your Name">
            <small>Leave blank if you want to send anonymously</small>
        </div>
        <div class="h3x-form-group">
            <label for="message">Drop some message:</label>
            <textarea name="message" id="message" class="h3x-input-disable-on-nav" cols="30" rows="6" placeholder="Your Message"></textarea>
            <small id="message-required" class="h3x-mb-0"></small>
        </div>
        <div class="h3x-seperator"></div>
        <div class="h3x-form-group">
            <button type="submit" class="h3x-input-disable-on-nav"><span class="ion-paper-airplane"></span> Send</button>
        </div>
    </form>
    <div class="h3x-success-message">
        <h4>Your message was sent! <span class="h3x-reload-current h3x-more-info-link h3x-cursor-pointer">Send more?</span></h4>
    </div>
</section>
@endsection
