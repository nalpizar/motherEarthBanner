$("#lines path").each(function() {
  var opacity = Math.random() * .6 + .4;
  var xPos = -200;
  var yPos = -200;
  var randomDelay = Math.random() * 1;
  
  TweenMax.set(this, {
    x: xPos, y: yPos
  });
  
  TweenMax.to(this, 2, {
    x: 0,
    y: 0,
    opacity: opacity,
    ease: Power4.easeInOut,
    delay: randomDelay
  })

  TweenMax.to(this, 3, {delay: 3, rotationY:360, transformOrigin:"right 50% -200"})
});

var mylab = new Vivus('my-lab', {type: 'delayed', duration: 200}, function () {});

