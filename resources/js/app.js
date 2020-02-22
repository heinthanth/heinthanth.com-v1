/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */
let SideBarWidth = 250;
let $nav = $(".h3x-side-nav");

require("./bootstrap");

window.openSideNav = () => {
    $("main").css({
        transform: `translateX(${SideBarWidth}px)`
    });
    $nav.css({
        width: SideBarWidth
    });
    if (
        window.innerHeight > 370 &&
        $(".h3x-side-nav-divider").height() == 0
    ) {
        setTimeout(() => {
            $(".h3x-side-nav-divider").animate(
                {
                    height: "80%"
                },
                500
            );
        }, 500);
    }
    $nav.attr("data-expanded", "true");
}

window.closeSideNav = () => {
    if (
        window.innerHeight > 370 &&
        $(".h3x-side-nav-divider").height() > 1
    ) {
        $(".h3x-side-nav-divider").animate(
            {
                height: 0
            },
            500,
            () => {
                $("main").css({
                    transform: `translateX(0)`
                });
                $nav.css({
                    width: 0
                });
                $nav.attr("data-expanded", "false");
            }
        );
    } else {
        $("main").css({
            transform: `translateX(0)`
        });
        $nav.css({
            width: 0
        });
        $nav.attr("data-expanded", "false");
    }
}

$(".h3x-sidenav-toggler").click(() => {
    if ($nav.attr("data-expanded") == "false") {
        openSideNav();
    } else {
        closeSideNav();
    }
});

$("#main-content").click(() => {
    if($nav.attr("data-expanded") == "true") {
        closeSideNav();
    }
});

$("#main-content").swipe({
    swipeRight: () => {
        if($nav.attr("data-expanded") == "false") { 
            openSideNav()
        }
    },
    swipeLeft: () => {
        if($nav.attr("data-expanded") == "true") { 
            closeSideNav()
        }
    }
});

$("main").scroll((e) => {
    var winScroll = document.getElementById("main-content").scrollTop;
    var height = document.getElementById("main-content").scrollHeight - document.getElementById("main-content").clientHeight;
    var scrolled = (winScroll / height) * 100;
    $('.h3x-page-scroll-progress').css('width', `${scrolled}%`);
});