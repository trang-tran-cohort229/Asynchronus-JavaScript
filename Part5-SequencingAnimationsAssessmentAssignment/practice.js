//gsap.to('.text', {y: 200, duration: 1})
//gsap.to('.text', {y: 100, opacity: 0, duration: 1})
//gsap.to('.text', {opacity: 0}, {opacity: 1, duration: 1})
//gsap.to('.text', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1})

//const tl = gsap.timeline({defaults: {duration: 0.75}})
const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}})

// tl.fromTo('.cars-container', {scale: 0}, {scale: 1})
// tl.fromTo('.cars-container', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)"})// faster
tl.fromTo('.cars-container', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5}) // longer

//tl.fromTo('.car', {opacity: 0}, {opacity: 1})
//tl.fromTo('.car', {opacity: 0, x: -50}, {opacity: 1, x: 0})
// tl.fromTo('.car', {opacity: 0, x: -50, rotation: '-45deg'}, {opacity: 1, x: 0, rotation: '0deg'})
// tl.fromTo('.car', {opacity: 0, x: -50, rotation: '-45deg'}, {opacity: 1, x: 0, rotation: '0deg'}, '<')
tl.fromTo('.car', {opacity: 0, x: -50, rotation: '-45deg'}, {opacity: 1, x: 0, rotation: '0deg'}, '< 50%') // half way
// tl.fromTo('.text', {x:30, opacity: 0}, {x: 0, opacity: 1})
tl.fromTo('.text', {x:30, opacity: 0}, {x: 0, opacity: 1}, '<')

// Cars jump
// tl.fromTo('.car', {y:0}, {y: -20})
// tl.fromTo('.car', {y:0}, {y: -20, yoyo: true, repeat: 2})
// tl.fromTo('.car', {y:0}, {y: -20, yoyo: true, repeat: -1})
// tl.fromTo('.car', {y:0, rotation: '0deg'}, {y: -20, rotation: '10deg' yoyo: true, repeat: -1})
tl.fromTo('.car', {y:0, rotation: '0deg'}, {y: -20, rotation: '-20deg' yoyo: true, repeat: -1})

// Fading out the cars
const button = document.querySelector('button');

button,addEventListener('click', () => {
    gsap.to('.cars-container', {opacity:0, y: 100, duration: 0.75, ease: 'power1.out'})
})