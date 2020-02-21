



// nav
$(document).ready(function(){
  $(".burger-box").on( "click", function(){
    $(this).toggleClass("open");
    $("nav").toggleClass("open");
  });
});






var myWave = $('#wave1').wavify({
  height: 40,
  bones: 4,
  amplitude: 120,
  // color: '#FFF',
  speed: .11
});

var myWave2 = $('#wave2').wavify({
  height: 40,
  bones: 3,
  amplitude: 120,
  color: '#FFF',
  speed: .11
});

var myWave3 = $('#wave3').wavify({
  height: 40,
  bones: 5,
  amplitude: 120,
  // color: '#FFF',
  speed: .12
});

var myWave4 = $('#wave4').wavify({
  height: 40,
  bones: 3,
  amplitude: 120,
  color: '#FFF',
  speed: .13
});
