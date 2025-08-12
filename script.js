gsap.from(".navbar-title", {
  y: -150,
  duration: 1,
  opacity: 0
});

gsap.from(".nav-items a", {
  y: -150,
  duration: 1,
  delay: 0.8,
  stagger: 0.5
});

gsap.from("video", {
  opacity: 0,
  duration: 3
});

var menu = document.querySelector("#bar");
var close = document.querySelector("#close");

var tl = gsap.timeline();

tl.to(".side-nav", {
  right: 0,
  duration: 1
});
tl.from(".side-nav h3", {
  opacity: 0,
  stagger: 0.3
});
tl.pause();

menu.addEventListener("click", function () {
    event.preventDefault();
  tl.play();
});

close.addEventListener("click", function () {
  tl.reverse();
});
