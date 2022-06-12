// disables context menu
$(window).contextmenu(function (e) {
    e.preventDefault();
});

// nav right click menu
$(document).click(function() {
    $('#ide-nav-menu, #ide-body-menu').hide()
});

$('#ide-nav').contextmenu(function(e) {
    $('#ide-body-menu').hide();
    $('#ide-nav-menu').show().css({
        left: e.pageX,
        top: e.pageY
    });
});

$('#ide-body').contextmenu(function(e) {
    $('#ide-nav-menu').hide();
    $('#ide-body-menu').show().css({
        left: e.pageX,
        top: e.pageY
    });
});