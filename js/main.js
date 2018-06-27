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
var tl = new TimelineLite();
tl.to(".orange", 1, {x: 400})
  .to(".green", 2, {x: 400, ease: Bounce.easeOut})

// separate tween with a delay which makes it play after the timeline
TweenLite.to(".grey", 1, {x:350, rotation:360, delay:3})

// GSDevTools.create();
