import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

Foundation.Interchange.SPECIAL_QUERIES['mediumretina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
$(document).foundation();
$('.form-floating-label input, .form-floating-label textarea').focusin(function(){
  $(this).parent().addClass('has-value');
});

$('.form-floating-label input, .form-floating-label textarea').blur(function(){
  if(!$(this).val().length > 0) {
    $(this).parent().removeClass('has-value');
  }
});
//
// $(document).on("scroll", function(){
//   if
//     ($(document).scrollTop() > 100){
//     $('.unicornName').addClass("unicornNameout");
//   }
//   else{
//     $('.unicornName').removeClass("unicornNameout");
//   }
// });
window.addEventListener('scroll', function(e){
  if (window.scrollY > 10){
    $('.unicornName').addClass("unicornNameout");
  }
  else{
    $('.unicornName').removeClass("unicornNameout");
  }
});
