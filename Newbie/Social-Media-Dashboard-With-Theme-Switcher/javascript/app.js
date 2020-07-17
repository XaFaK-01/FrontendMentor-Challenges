$("#customSwitch1").on('change', function (e) {
    e.preventDefault();
    if ($(this).is(':checked')) {

        $('.container-fluid').css('background-color', 'hsl(0, 0%, 100%)');
        $('.first-row').css('background-color', 'hsl(225, 100%, 98%)');
        $('.first-row').css('border-bottom', '10px solid hsl(225, 100%, 98%)');
        $('.col-lg').css('background-color', 'hsl(227, 47%, 96%)');
        if ($('.instagram').hasClass('instagram-followers-dark')) {

            $('.instagram').removeClass('instagram-followers-dark');
            $('.instagram').addClass('instagram-followers-white');
        }
        $('.user_id, .followers-text, .total-followers, .social-information-status').css('color', 'hsl(228, 12%, 44%)')
        $('body').css('color', 'hsl(230, 17%, 14%)')

        $('.view-mode-value').html('Light Mode');

        if ($('.col-lg').hasClass('col-lg-dark')) {

            $('.col-lg').removeClass('col-lg-dark')
            $('.col-lg').addClass('col-lg-white')
        }

        $('hr').css('border-top', ' border-top: 1px solid grey')
    } else {
        $('.container-fluid').css('background-color', 'hsl(230, 17%, 14%)');
        $('.first-row').css('background-color', 'hsl(232, 19%, 15%)');
        $('.first-row').css('border-bottom', '10px solid hsl(232, 19%, 15%)');
        $('.col-lg').css('background-color', 'hsl(228, 28%, 20%)');
        if ($('.instagram').hasClass('instagram-followers-white')) {

            $('.instagram').removeClass('instagram-followers-white');
            $('.instagram').addClass('instagram-followers-dark');
        }
        $('.user_id, .followers-text, .total-followers, .social-information-status, .view-mode-value').css('color', 'hsl(228, 34%, 66%)')

        $('body').css('color', 'hsl(0, 0%, 100%)')
        $('.view-mode-value').html('Dark Mode');

        if ($('.col-lg').hasClass('col-lg-white')) {

            $('.col-lg').removeClass('col-lg-white')
            $('.col-lg').addClass('col-lg-dark')
        }
        $('hr').css('border-top', 'border-top: 1px solid hsl(228, 28%, 20%)')
    }
});