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

// terminal 

// TODO get the cli to move with the body
// TODO get the cli to stay at the bottom of the body
// TODO get input on the cli
$('#open-cli').click(function(){
    $('#cli').toggle();
});

const anchor = $('#cli-anchor');
var position = anchor[0].getBoundingClientRect();

$('#cli').css({
    height: position.height,
    left: position.left,
    top: position.top,

})

$('#cli').resizable().draggable();

