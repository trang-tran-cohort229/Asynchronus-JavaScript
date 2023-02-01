// // Catching errors
// let promise = new Promise((fulfilled, rejected) => {
//     let num = 5 * 2;
//     if (num == 10) {
//         fulfilled('succeeded')
//     } else {
//         rejected('failed')
//     }
// })

// promise.then((message) => {
//     console.log('The asynchronous function has ' + message + '. When a promise is fulfilled, its then() handler is called.')
// })
// .catch((message) => {
//     console.log('The asynchronous function has ' + message + '. When a promise is rejected, its catch() handler is called.')
// })




// // Callbacks
// const firstPlace = true;
// const secondPlace = false;

// function placePromise() {
//     return new Promise((approve, disapprove) => {
//         if (firstPlace) {
//             disapprove({
//                 team: 'Shark',
//                 message: 'got a first place. And Whale got a second place' 
//             })
//         } else if (secondPlace) {
//             disapprove({
//                 team: 'Whale',
//                 message: 'got a first place. And Shark got a second place'
//             })
//         } else {
//             approve('Congratulation Shark and Whale')
//         }
//     })
// }

// placePromise().then((message) => {
//     console.log('Hi everyone! ' + message)
// }).catch((error) => {
//     console.log(error.team + ' ' + error.message)
// })



// Combining multiple promises
const teamA = new Promise((approve, disapprove) => {
    approve('Team A won Team B')
})
const teamC = new Promise((approve, disapprove) => {
    approve('Team C won Team D')
})
const teamE = new Promise((approve, disapprove) => {
    approve('Team E won Team F')
})
Promise.all([
    teamA,
    teamC,
    teamE
]).then((message) => {
    console.log(message)
})