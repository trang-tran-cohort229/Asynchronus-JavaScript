// Callbacks
function greet(name) {
    console.log(`Welcome ${name} coming to our club`)
}
setTimeout(greet, 1000, 'Sara');



const example = function() {
    console.log("Today is Monday.")
}
setTimeout(example, 2000);



setTimeout(function() {
    console.log("Today is Tuesday.")
}, 3000);



setTimeout(() => {
    console.log("Today is Wednesday.")
}, 4000);

