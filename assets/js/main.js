$(document).ready(function() {
    $('h2.content-title').each(function(i,el){
        $('ul.navbar-nav').append('<li class="nav-item"><a class="nav-link text-white" data-href="'+$(this).attr('id')+'" href="javascript:void(0)">'+$(this).text()+'</a></li>');
    });

    $("a.nav-link").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('href')).offset().top-70
        },1000)
    })
});