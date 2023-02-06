// async await
async function greet() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Welcome to Cohort229"), 3000)
    });
    let result = await promise;
    console.log(result);
}
greet()