function news(source){ // this module sends an AJAX request to retrieve the news data
    $.getJSON("https://newsapi.org/v1/articles?source="+source+"&apiKey=5e161d0fb95b487da8bf2daced3e729d",
        function(content){
           var article= content.articles; // shortens it 
           for (var index in article){
                cards(article[index].title,article[index].author,article[index].description,article[index].url,article[index].publishedAt,article[index].urlToImage)
           }
        } 
    )
}

function cards(title, author,description,link,time,image){ // this module formats the information
    $(".body").append(
        '<a href="'+link+'" target="_blank"><div class="card"><article class="media">'+
        '<div class="media-left">'+
            '<figure class="image is-128x128">'+
                '<img src="'+image+'" alt="Image">'+
            '</figure>'+
        '</div>'+
        '<div class="media-content">'+
            "<strong>"+
                title+
            "</strong>"+"<br>"+
            "<div class='author'>"+
            author+
            "</div>"+
            "<div>"+
                "-"+description+
            "</div>"+
            "<div class='time'>"+
            time+
            "</div>"+
        '</div>'+
        '</article></div></a>'
    )
}

function selector(){
    $('.navbar-dropdown').delegate('a.navbar-item', 'click', function() {
        var text = $(this).attr("value");
        $('section').fadeOut('slow');
        $('.body').fadeOut('fast');
        $('.body').empty();
        news(text);
        $('.body').hide();
        $('.body').fadeIn('slow');
    });
    $('.navbar-item').on('click',function(){
        if($(this).find(".navbar-menu").hasClass('is-active')===false){
            $(this).find(".navbar-menu").addClass('is-active');
        }
        else{
            $(this).find(".navbar-menu").removeClass('is-active');
        }
    })
}

$(document).ready(function(){
    selector();
})