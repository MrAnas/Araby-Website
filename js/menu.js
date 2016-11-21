$(function() {

var $el, leftPos, newWidth,
    $mainNav = $("#navigator");
$mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");

$magicLine.width($(".current-page").width())
    .css("left", $(".current-page")
    .position().left)
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());

$("#navigator li").hover(function() {
$el = $(this);
leftPos = $el.position().left;
newWidth = $el.width();
$magicLine.stop().animate({
left: leftPos,
width: newWidth
});
}, function() {
    $magicLine.stop().animate({
    left: $magicLine.data("origLeft"),
    width: $magicLine.data("origWidth")
});    
});
});
// Search bar animation
    $(function() {
var $searchlink = $('#searchlink');

// hover effect
$searchlink.on('mouseover', function(){
$(this).addClass('open');
}).on('mouseout', function(){
$(this).removeClass('open');
})});
        
$searchlink.on('click', function(e){
var target = e ? e.target : window.event.srcElement;

if($(target).attr('id') == 'searchlink') {
if($(this).hasClass('open')) {
$(this).removeClass('open');
} else {
$(this).addClass('open');
}
}
});
$(document).ready(function(){
$('#content').hover(function() {
$("#content").addClass('transition');

}, function() {
$("#content").removeClass('transition');
});
});