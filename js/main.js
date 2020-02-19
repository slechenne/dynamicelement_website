



// nav
$(document).ready(function(){
  $(".burger-box").on( "click", function(){
    $(this).toggleClass("open");
    $("nav").toggleClass("open");
  });
});





// For jQuery
var myWave = $('#wave1').wavify({
  height: 40,
  bones: 4,
  amplitude: 120,
  // color: '#FFF',
  speed: .13
});

var myWave2 = $('#wave2').wavify({
  height: 40,
  bones: 3,
  amplitude: 120,
  color: '#FFF',
  speed: .13
});
