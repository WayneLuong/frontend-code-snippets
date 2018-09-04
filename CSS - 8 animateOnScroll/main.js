/* document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('section').offsetTop;
  
     if (isVisible) {
       document.getElementById('section').classList.add('fromRight');
     }
  });
 */
/* $(window).on('scroll', function (e) {
    var top = $(window).scrollTop() + $(window).height(),
        isVisible = top > $('#2').offset().top;
        isNotVisible = top < $('#2').offset().top;
 
  
        $('#2').toggleClass('fromRight', isVisible);
 });


 if (window.jQuery) {  
    // jQuery is loaded  
    console.log("Yeah!");
}  */

/* detects scroll position and element position 
animates when more than 200px from top  or from bottom*/
$(window).scroll(function () {
  var scrollBottom = $(window).scrollTop() + $(window).height();
  var y = $(window).scrollTop(),
  x = y + scrollBottom,
    a = $('#test').offset().top - 50;

  if (y > a || x<a) { //y is top scroll x is bottom scroll
    $('#test').removeClass('fromRight')
  } else {
    $('#test').addClass('fromRight')
  }
});