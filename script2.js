$('.ques').click(function () {
    if ($(this).hasClass('expand')) {
        $(this).next().removeClass('hide')
        $(this).removeClass('expand')
    } else {
        $(this).next().addClass('hide')
        $(this).addClass('expand')
    }

})

