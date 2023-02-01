const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");


/*
calling the fetch() API,
and assigning the return value to the fetchPromise variable

immediately after, logging the fetchPromise variable.
This should output something like: Promise { <state>: "pending" },
telling us that we have a Promise object,
and it has a state whose value is "pending".
The "pending" state means that the fetch operation is still going on.

passing a handler function into the Promise's then() method.
When (and if) the fetch operation succeeds, the promise will call our handler,
passing in a Response object, which contains the server's response.

logging a message that we have started the request.

The complete output should be something like:

Promise { <state>: "pending" }
Started request…
Received response: 200
*/