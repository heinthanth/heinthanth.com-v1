@extends('layouts.main')

@section('main-content')
<section id="about" class="h3x-section h3x-section-single">
    <img src="{{ asset('image/undraw_hacker_mind.svg') }}" alt="Hein Thanth" class="h3x-img-responsive">
    <h1 class="h3x-section-title">Just points</h1>
    <p>In short, I've solid experience and knowledge on <span class="h3x-font-weight-bold">HTML5, CSS3, Javascript ECMA 2015, jQuery, Bootstrap, PHP7, Laravel 6, SQL, Git, Linux.</span></p>
    <p>I can code in <b>C++, Java, Python, Bash.</b> Favourite is <b>PHP</b>. Also, I can handle <b>Windows, Linux, macOS</b> well. If you want to know my story, just keep reading!</p>
    <div class="h3x-skill-container" id="skill-container">
        <div class="h3x-skill">
            <div class="h3x-skill-info">
                <div class="h3x-skill-label">HTML</div>
                <div class="h3x-skill-progress-label"></div>
            </div>
            <div class="h3x-skill-bar">
                <div class="h3x-skill-progress" data-percent="90%"></div>
            </div>
        </div>
        <div class="h3x-skill">
            <div class="h3x-skill-info">
                <div class="h3x-skill-label">CSS, SCSS, SASS</div>
                <div class="h3x-skill-progress-label"></div>
            </div>
            <div class="h3x-skill-bar">
                <div class="h3x-skill-progress" data-percent="85%"></div>
            </div>
        </div>
        <div class="h3x-skill">
            <div class="h3x-skill-info">
                <div class="h3x-skill-label">JS, jQuery</div>
                <div class="h3x-skill-progress-label"></div>
            </div>
            <div class="h3x-skill-bar">
                <div class="h3x-skill-progress" data-percent="75%"></div>
            </div>
        </div>
        <div class="h3x-skill">
            <div class="h3x-skill-info">
                <div class="h3x-skill-label">PHP, Laravel</div>
                <div class="h3x-skill-progress-label"></div>
            </div>
            <div class="h3x-skill-bar">
                <div class="h3x-skill-progress" data-percent="85%"></div>
            </div>
        </div>
        <div class="h3x-skill">
            <div class="h3x-skill-info">
                <div class="h3x-skill-label">SQL</div>
                <div class="h3x-skill-progress-label"></div>
            </div>
            <div class="h3x-skill-bar">
                <div class="h3x-skill-progress" data-percent="60%"></div>
            </div>
        </div>
        <div class="h3x-skill">
            <div class="h3x-skill-info">
                <div class="h3x-skill-label">Node.js, React.js</div>
                <div class="h3x-skill-progress-label"></div>
            </div>
            <div class="h3x-skill-bar">
                <div class="h3x-skill-progress" data-percent="65%"></div>
            </div>
        </div>
        <div class="h3x-skill">
            <div class="h3x-skill-info">
                <div class="h3x-skill-label">Git</div>
                <div class="h3x-skill-progress-label"></div>
            </div>
            <div class="h3x-skill-bar">
                <div class="h3x-skill-progress" data-percent="70%"></div>
            </div>
        </div>
        <div class="h3x-skill">
            <div class="h3x-skill-info">
                <div class="h3x-skill-label">Linux</div>
                <div class="h3x-skill-progress-label"></div>
            </div>
            <div class="h3x-skill-bar">
                <div class="h3x-skill-progress" data-percent="80%"></div>
            </div>
        </div>
        <div class="h3x-skill">
            <div class="h3x-skill-info">
                <div class="h3x-skill-label">Programming</div>
                <div class="h3x-skill-progress-label"></div>
            </div>
            <div class="h3x-skill-bar">
                <div class="h3x-skill-progress" data-percent="85%"></div>
            </div>
        </div>
    </div>
    <h1 class="h3x-section-title">Skills as my Life Story</h1>
    <p>Believe or not! I've interested in Computer Technologies since my childhood. I've been taught Computer Basics with Windows 7 after my Grade-5 final exam, a fine summer holidays. I've ever use Adobe Photoshop since that time.</p>
    <p><img class="h3x-img-responsive" src="{{ asset('image/android.png') }}" alt="Android Logo">After that, I've read many books about how to use, handle, set preferences, and even, how to root Android phones. It can be said I use Androids since that time when Android phones spreaded out to Myanmar markets.</p> <p><img class="h3x-img-responsive" src="{{ asset('image/cmd-helloworld.png') }}" alt="Hello, World! in CMD">I've learned how to write shell scripts (Batch/CMD scripts) for Windows by tracing the codes that are used for rooting / unlocking bootloader for mobiles.</p>
    <p>When I was 13~14, I learn how to write HTML and how to perform Phishing with Facebook and Gmail.</p>
    <p><img class="h3x-img-responsive" src="{{ asset('image/the-hackers-underground-handbook.jpg') }}" alt="The Hacker's Underground Handbook">I was a small script kiddie who know no line of PHP code, just copy and use it! I've read the basic methodology of Hacking and cracking from the book called "The Hacker's Underground Handbook" by David Melnichuk and learned about types of hacking, systems and hashes.</p>
    <p><img class="h3x-img-responsive" src="{{ asset('image/windows-vs-linux.png') }}" alt="Not more windows, Just Linux">From that book, I've been introduced with Linux for the first time. He said, <q>You must master Linux to be a hacker. As a hacker, you'll need to know the behavior of the target!</q>. It's quite reasonable. From that time, I wanted to use or try Linux. But internet fee is quiet expansive and my family allow me just One Gigabyte for 3 days or 5 days, I'm not sure. And, the size of Ubuntu iso is about 1.8 GB, I think. I wasn't able to download. So, I searched for Linux iso that is just a few megabytes large.</p>
    <p><img class="h3x-img-responsive" src="{{ asset('image/kali-linux.png') }}" alt="Kali Linux">While searching, I found a Kali Linux Network Installer Image, that's only 46 or 49MB large. A 14 years old kid didn't know it was Network Installer or Full Installer. I still remember, my laptop hard drive was formatted by the Kali Linux Net-installer. Most of my childhood's digital memories were gone! Can you imagine my feelings at that time?</p>
    <p>Also, from that book I've learned some HTML basic. Then, later, I've learned <b>CSS, SCSS, SASS, JS, jQuery, PHP, Laravel, SQL</b> with the help of <a href="http://w3schools.com" target="_blank" class="h3x-more-info-link">W3Schools</a> to some extends. And, till now, due to self studies and others resources, I can code in multi languages and have solid knowledge in Linux and other OSes ....</p>
</section>
@endsection
