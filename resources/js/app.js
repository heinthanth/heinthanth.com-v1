/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require("./bootstrap");

let $SideBarWidth = 250;
let $nav = $(".h3x-side-nav");
let $main = $("#main-content");
let $mountpoint = $("#mountpoint");
let $minHeight = 450;

window.openSideNav = () => {
    if (window.innerWidth < 992) {
        $("main").css({
            transform: `translateX(${$SideBarWidth}px)`
        });
        $nav.css({
            width: $SideBarWidth
        });
        if (
            window.innerHeight > $minHeight &&
            $(".h3x-side-nav-divider").height() == 0
        ) {
            setTimeout(() => {
                $(".h3x-side-nav-divider").animate({
                        height: "80%"
                    },
                    500
                );
            }, 500);
        }
        $nav.attr("data-expanded", "true");
    }
};

window.closeSideNav = () => {
    if (window.innerWidth < 992) {
        if (
            window.innerHeight > $minHeight &&
            $(".h3x-side-nav-divider").height() > 1
        ) {
            $(".h3x-side-nav-divider").animate({
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
};

window.toggleSwipe = () => {
    if ($(window).width() < 992) {
        if (!$main.hasClass("allow-swipe")) {
            $main.addClass("allow-swipe");
            $main.swipe("enable");
        }
    } else {
        if ($main.hasClass("allow-swipe")) {
            $main.removeClass("allow-swipe");
            $main.swipe("disable");
        }
    }
};

window.hackFooter = () => {
    var height =
        document.getElementById("main-content").scrollHeight -
        document.getElementById("main-content").clientHeight;
    if (height <= 0) {
        if (!$main.has(".h3x-fake-footer").length) {
            $main.append(
                `<div class="h3x-active-footer h3x-fake-footer">${$(
                    "footer"
                ).html()}</div>`
            );
        }
        $("footer").removeClass("h3x-active-footer");
        $("footer").css({
            visibility: "hidden"
        });
    } else {
        $(".h3x-fake-footer").remove();
        $("footer").addClass("h3x-active-footer");
        $("footer").css({
            visibility: "visible"
        });
    }
};

window.changeFooterHeinThanth = () => {
    if (window.innerWidth < 350) {
        if (
            $(".h3x-active-footer > .h3x-ht-changeable").text() == "Hein Thanth"
        ) {
            $(".h3x-active-footer > .h3x-ht-changeable").text("HT");
        }
    } else {
        if ($(".h3x-active-footer > .h3x-ht-changeable").text() == "HT") {
            $(".h3x-active-footer > .h3x-ht-changeable").text("Hein Thanth");
        }
    }
};

$(".h3x-sidenav-toggler").click(() => {
    if ($nav.attr("data-expanded") == "false") {
        openSideNav();
    } else {
        closeSideNav();
    }
});

window.monitorHacks = () => {
    toggleSwipe();
    setScrollProgress();
    hackFooter();
    changeFooterHeinThanth();
};

$(window).on("load", () => {
    $(document).trigger("launched");
});

$(document).on("launched", () => {
    monitorHacks();
});

$(window).resize(() => {
    monitorHacks();
});

$(document).on("click", ".allow-swipe", () => {
    if ($nav.attr("data-expanded") == "true") {
        closeSideNav();
    }
});

$main.swipe({
    swipeRight: () => {
        if ($nav.attr("data-expanded") == "false") {
            openSideNav();
        }
    },
    swipeLeft: () => {
        if ($nav.attr("data-expanded") == "true") {
            closeSideNav();
        }
    }
});

window.setScrollProgress = () => {
    var winScroll = document.getElementById("main-content").scrollTop;
    var height =
        document.getElementById("main-content").scrollHeight -
        document.getElementById("main-content").clientHeight;
    if (height > 0) {
        var scrolled = (winScroll / height) * 100;
        $(".h3x-page-scroll-progress").css("width", `${scrolled}%`);
    } else {
        $(".h3x-page-scroll-progress").css("width", `0%`);
    }
};

$("main").scroll(setScrollProgress);

window.hidePage = (callback = null) => {
    if ($main.attr("data-render-state") != "hide") {
        if ($main.css("opacity") != 0) {
            $main.animate({
                    opacity: 0
                },
                500,
                () => {
                    $main.css("visibility", "hidden");
                    $main.attr("data-render-state", "hide");
                    if (typeof callback !== undefined) {
                        callback();
                    }
                }
            );
        } else {
            $main.css("visibility", "hidden");
            $main.attr("data-render-state", "hide");
            if (typeof callback !== undefined) {
                callback();
            }
        }
    } else {
        if (typeof callback !== undefined) {
            callback();
        }
    }
};

window.showPage = (callback) => {
    if ($main.attr("data-render-state") != "show") {
        $main.css("visibility", "visible");
        if ($main.css("opacity") != 1) {
            $main.animate({
                    opacity: 1
                },
                1000,
                () => {
                    $main.attr("data-render-state", "show");
                    if (typeof callback !== undefined) {
                        callback();
                    }
                }
            );
        } else {
            $main.attr("data-render-state", "show");
            if (typeof callback !== undefined) {
                callback();
            }
        }
    }
};

window.hackPage = ($url, $shouldPushHistroy = true) => {
    hidePage(() => {
        $mountpoint.load(`${$url} #root`, (response, status, xhr) => {
            $redirect = $(response)
                .filter("meta[name='redirected-to']")
                .attr("content");
            $title = $(response)
                .filter("title")
                .text();
            if ($redirect) {
                $url = $redirect;
            }
            document.title = $title;
            if ($shouldPushHistroy) {
                history.pushState(null, $title, $url);
            }
            showPage(closeSideNav);
        });
    });
};

$(document).on("click", "a[target!='_blank']", e => {
    e.preventDefault();

    let $anchor = $(e.target);
    let $url = $anchor.attr("href");

    if ($anchor.attr("data-render-me") == "true") {
        hackPage($url);
    } else {
        document.location = $url;
    }
});

$(window).on("popstate", () => {
    hackPage(document.location.href, false);
});
