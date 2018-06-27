TweenMax.to(".spider", 5, {scale: 0.6});
TweenMax.to(".spider", 5, {scale: 1.6});
TweenMax.to(".spider", 5, {opacity: 0.9});

TweenMax.from(".box", 5, {
    opacity: 0,
    scale: 0,
    x: 600,
    rotation: 360,
    scale: 0.5,
    borderRadius: "25%",
    ease:Bounce.easeOut,
    repeat: -1
});

TweenMax.staggerFrom(".boxe", 0.5, {opacity:0, rotation: 360, scale:2, y:200, delay:0.5}, 0.2);
TweenMax.to(".boxes", 5, {repeat: -1});
// TweenMax.to(".box, .boxe", 0.5, {opacity:0, delay: 2, onComplete:complete});

// Timeline animates green and onratechange
var tl = new TimelineLite({id: "timeline"});
tl.to(".orange", 1, {x: 250, id: "orange"})
  .to(".green", 2, {x: 250, ease: Bounce.easeOut, id: "green"})

// separate tween with a delay which makes it play after the timeline
TweenLite.to(".grey", 5, {x:250, rotation:360, delay:3, ease:Bounce.easeOut, id: "grey"})

// GSDevTools.create();

  
TweenMax.to("#whyGSAP", 2, {
    scale:1.1,
    ease: Circ.easeOut,
    y: -100,
    opacity: 0
});

TweenMax.staggerTo("#whyGSAP1", 10, {
    scale:0.5,
    color: "red",
    delay: 2.1,
    ease: Circ.easeOut,
    y: -200,
    opacity: 0,
    repeat: -1,
    skew: 2
});

TweenMax.staggerTo("#whyGSAP2", 10, {
    scale:0.6,
    color: "red",
    delay: 2.2,
    ease: Circ.easeOut,
    y: -200,
    opacity: 0,
    repeat: -1
});

TweenMax.staggerTo("#whyGSAP3", 10, {
    scale:0.7,
    color: "red",
    delay: 2.3,
    ease: Power3.easeOut,
    y: -200,
    opacity: 0,
    repeat: -1
});