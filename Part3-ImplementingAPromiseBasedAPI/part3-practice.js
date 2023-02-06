// setTimeout()
function greet() {
    console.log('Hello World!')
}

setTimeout(greet, 1000) // show after 1 second




function team(name, order) {
    console.log(`Congratulation team ${name} won ${order} place!`)
}

setTimeout(team, 5000, 'Shark', 'first') // show after 5 seconds


// clearTimeout()
function student(firstName) {
    console.log(`${firstName} is student of the month`)
}
const timeout = setTimeout(student, 500, 'Sara')
clearTimeout(timeout) // won't show anything


// setInterval() & clearInterval()
function greet() {
    console.log('Hello World!')
}

// setInterval(greet, 1000) // show every 1 second
const intervalId = setInterval(greet, 1000);
clearInterval(intervalId)