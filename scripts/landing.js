var animatePoints = function() {
  var revealPoint = function() {
          // #7
          $(this).css({
              opacity: 1,
              transform: 'scaleX(1) translateY(0)'
          });
        }
        $.each($('.point'), revealPoint);
      };

$(window).load(function() {
  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
  window.addEventListener('scroll', function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
      animatePoints(pointsArray);
    }
  });
}
