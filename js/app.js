var tree1 = document.getElementById("tree1"),
    tree2 = document.getElementById("tree2"),
    tree3 =  document.getElementById("tree3"),
    tree4 =  document.getElementById("tree4"),
    circle = document.getElementById("circle"),
    darkblue = document.getElementsByClassName("darkblue"),
    darkerblue = document.getElementsByClassName("darkerblue"),    
    otherdarkerblue = document.getElementsByClassName("otherdarkerblue"),
    lighterblue = document.getElementsByClassName("lighterblue"),
    lightgreen = document.getElementsByClassName("lightgreen"),
    trees = document.getElementsByClassName("trees"),
    lightblue = document.getElementsByClassName("lightblue"),
    otherlightblue = document.getElementsByClassName("otherlightblue"),
    otherlighterblue = document.getElementsByClassName("otherlighterblue"),
       
    tl = new TimelineLite();

    function sun() {
      var suntl = new TimelineMax({repeat:-1});
      suntl.to(circle, 1, {scale:1.05,ease: Power0.easeNone});
      suntl.to(circle, 1, {scale:1,ease: Power0.easeNone});
    }

tl.to(tree1, 0.5, {y:200})
  .to(tree2, 0.5, {y:195})
  .to(tree3, 0.5, {y:195})
  .to(tree4, 0.5, {y:195}) 
  .to(darkblue, 1, {fill:"#111E40"})
  .to(darkerblue, 1, {fill:"#080D33"})
  .to(lighterblue, 1, {fill:"#234C68"})
  .to(otherdarkerblue, 1, {fill:"#173247"})
  .to(trees, 1, {fill:"#367036"})
  .to(lightgreen, 1, {fill:"#21485E"})
  .to(lightblue, 1, {fill:"#162851"})
  .to(otherlightblue, 1, {fill:"#223A6B"})
  .to(otherlighterblue, 1, {fill:"#306D8E"})
  .add(sun)

window.onload = function() {
  tl.restart();
};