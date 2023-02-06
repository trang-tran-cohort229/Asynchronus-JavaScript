// Wrapping setTimeout()
// We'll use the setTimeout() API to implement our alarm() function. 
// The setTimeout() API takes as arguments a callback function and a delay, given in milliseconds.
// When setTimeout() is called, it starts a timer set to the given delay, and when the time expires, it calls the given function.

// In the example below, we call setTimeout() with a callback function and a delay of 1000 milliseconds:
const output = document.querySelector('#output');
const button = document.querySelector('#set-alarm');

function setAlarm() {
  setTimeout(() => {
    output.textContent = 'Wake up!';
  }, 1000);
}

button.addEventListener('click', setAlarm);



// The Promise() constructor
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error('Alarm delay must not be negative');
      }
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    });
  }
/*
This function creates and returns a new Promise.
Inside the executor for the promise, we:
- check that delay is not negative, and throw an error if it is.
- call setTimeout(), passing a callback and delay.
The callback will be called when the timer expires,
and in the callback we call resolve, passing in our "Wake up!" message.  


