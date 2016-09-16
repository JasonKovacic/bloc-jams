 var pointsArray = document.getElementsByClassName('point');
 
 var revealPoint = function(point) {
         point.style.opacity = 1;
         point.style.transform = "scaleX(1) translateY(0)";
         point.style.msTransform = "scaleX(1) translateY(0)";
         point.style.WebkitTransform = "scaleX(1) translateY(0)";
     }

 var animatePoints = function(points) {
 
     forEach(points, revealPoint);
    
 };

window.onload = function() {
    
    
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
    

    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });
}