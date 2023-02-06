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



// // Combining multiple promises
// const teamA = new Promise((approve, disapprove) => {
//     approve('Team A won Team B')
// })
// const teamC = new Promise((approve, disapprove) => {
//     approve('Team C won Team D')
// })
// const teamE = new Promise((approve, disapprove) => {
//     approve('Team E won Team F')
// })
// Promise.all([
//     teamA,
//     teamC,
//     teamE
// ]).then((message) => {
//     console.log(message)
// })




// // Promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Tyler got a high score.')
//     }, 1000)
// })

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Tyler got a low score.')
//     }, 1000)
// })

// const onFulfillment = (result) => {
//     console.log(result)
//     console.log('Tyler will be going to the university.')
// }

// const onRejection = (error) => {
//     console.log(error)
//     console.log('Tyler will be going to the college.')
// }

// promise.then(onFulfillment)
// promise.catch(onRejection)


// Promise.all()
const promise1 = Promise.resolve(beef);
const promise2 = chicken;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'pork');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
