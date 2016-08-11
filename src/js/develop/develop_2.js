function changeViewport() {
    $(window).resize(function () {

        whatViewport();

    });

    function whatViewport() {
        var windowWidth = screen.width;
        var viewport = $("meta[name=viewport]");
        viewport.attr('content', 'width=device-width');
        if (windowWidth <= 640) {
            viewport.attr('content', 'width=640');
        }

    };

}


$(document).ready(function(){

});

$(window).load(function(){
    changeViewport();
});

$(window).resize(function(){

});