/* Bootstrap lightbox,
inspiration from http://www.bootply.com/KBspXYVjaX
------------------------ */
$(document).on('click', '[data-toggle="lightbox"]', function(event){
    event.preventDefault();
  	$('.modal-body').empty();
  	var title = $(this).children('img').attr("alt");
  	$('.modal-title').html(title);
    var destimg = '<img src="'+$(this).attr("href")+'" class="img-responsive">';
    $('.modal-body').html(destimg);
  	$('#myModal').modal({show:true});
    return false;
});
$(document).ready(function() {
    var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});
