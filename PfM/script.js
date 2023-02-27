const animh2 = document.getElementsByClassName("h2-animation")

var tl1 = gsap.timeline({})


tl1.to(".h2-animationbis", {visibilit : "hidden", top : 100})
tl1.to(".h2-animation", {duration : 2, bottom: 100})
tl1.to(".h2-animationbis", {visibility: "visible"})
tl1.to(".h2-animationbis", {duration : 2, bottom: 300, })

