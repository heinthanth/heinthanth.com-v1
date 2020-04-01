window.AprilFoolMessageFormController = (e) => {
    let name = $(`#${e.target.id} [name="name"]`).val();
    let message = $(`#${e.target.id} [name="message"]`).val();
    // disable button
    let button = $(`#${e.target.id} [type="submit"]`);
    button.attr('disabled', true);
    button.html(`<span class="ion-paper-airplane"></span> Sending ..`);
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: "/april-fool/send-message",
        method: "POST",
        data: {
            name: name,
            message: message
        },
        success: res => {
            if(res == "accepted") {
                $(`#${e.target.id}`).fadeOut(500);
                $('.h3x-success-message').fadeIn(500);
            }
        },
        error: err => {
            if(err.status == 422) {
                button.attr('disabled', false);
                button.html(`<span class="ion-paper-airplane"></span> Send`);
                $("#message-required").text("You need to drop some message");
                hackFooter();
            } else if(err.status == 500) {
                button.attr('disabled', false);
                button.html(`<span class="ion-paper-airplane"></span> Send`);
                $("#message-required").text("Something went wrong ...!");
                hackFooter();
            }
        },
    });
    return false
}

$('.h3x-ajax-form').on('submit', e => {
    let id = e.target.id;
    let controller = `${id}Controller`;
    let res = window[controller](e);
    return res;
});
