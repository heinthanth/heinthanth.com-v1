@extends('layouts.main')

@section('main-content')
<section id="about" class="h3x-section h3x-section-single">
    <img src="{{ asset('image/profile-2.jpg') }}" alt="Hein Thanth" class="h3x-img-responsive">
    <h1 class="h3x-section-title">Some Hightlight about Me</h1>
    <p>I'm Hein Thant Maung Maung (ဟိန်းသန့်မောင်မောင်). A Chinese-Mon mix-blood. Born on May 10<sup>th</sup> 2002.</p>
    <p>Studied at Basic Education High School, Ahlat from KG to Grade 8. And, studied Grade 9 and 10 at Parami Private High School, Mawlamyine. Passed Matriculation Examination with 4 D, total marks of 501. Interested in Computers and Electronics since I was young. And, now, studying Computer Science at <a class="h3x-more-info-link" href="https://uit.edu.mm" target="_blank">University of Information Technology, Yangon</a></p>
    <p>What about my interests? I'm interested in creating something new and breaking stuffs. And I enjoy making Electronic Music with DAW (digital audio workstations). It's my weird future bass track xD</p>
    <iframe class="h3x-embeds" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/713685298&color=%23060b08&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    <p class="h3x-mb-20">And also, I love to do pentesting in my free time. I usually play at <a href="http://hackthebox.eu" class="h3x-more-info-link" target="_blank">Hack The Box</a> and my current rank and points here ... Just a noob :3</p>
    <img src="https://www.hackthebox.eu/badge/image/244034" alt="Hack The Box">
    <p>Sometime, I like to write articles about something I know. Make sure you subscribe my news letter not to miss my articles xD. Wanna read more about what I master, <a href="{{ route('skills') }}" class="h3x-more-info-link" data-render-me="true">read this!</a></p>
</section>
@endsection
