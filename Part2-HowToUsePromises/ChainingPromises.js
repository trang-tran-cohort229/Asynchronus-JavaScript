const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});

/*
we add a then() handler to the promise returned by fetch().
But this time, our handler calls response.json(),
and then passes a new then() handler into the promise returned by response.json().
*/


const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise1
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });

/*
Instead of calling the second then() inside the handler for the first then(),
we can return the promise returned by json(),
and call the second then() on that return value.
This is called promise chaining and means we can avoid ever-increasing levels of indentation 
when we need to make consecutive asynchronous function calls.
*/



// We need to check that the server accepted and was able to handle the request, before we try to read it.
// We'll do this by checking the status code in the response and throwing an error if it wasn't "OK":

const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise2
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });
