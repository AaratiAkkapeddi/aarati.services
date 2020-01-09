$(document).on('mousemove', function(e){
    $('#circle').css({
       left:  e.pageX - 200,
       top:   e.pageY - 200
    });
    $('#circle2').css({
       left:  e.pageX - 350,
       top:   e.pageY - 50
    });
    $('#circle3').css({
       left:  e.pageX - 0,
       top:   e.pageY + 10
    });
});