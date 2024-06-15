//GIAIC
//Thursday Morning 9 to 12
//Assignment
//Topic : Asynchronous
//Question # 1
//      Write a simple asynchronous TypeScript function fetchGreeting that returns a
//      greeting message after a 2-second delay using setTimeout.
function fetchGreeting() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hello, world!");
        }, 2000);
    });
}
fetchGreeting().then(function (greeting) {
    console.log(greeting);
});
//************************************************************************************** */
//************************************************************************************** */
//  Question # 2
//  Write a function simulateTask that simulates a task by logging "Task started",
//  waits for 1 second, and then logs "Task completed". Use setTimeout for the delay
function simulateTask() {
    console.log("Task started");
    setTimeout(function () {
        console.log("Task completed");
    }, 1000);
}
// Call the function to see the output
simulateTask();
//*************************************************************************************** */ 
//*************************************************************************************** */
//  Question # 3
//  Write a function fetchData that returns a Promise which resolves with the string
//  "Data fetched successfully!" after a delay of 1 second.
function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
// Example usage:
fetchData().then(function (message) {
    console.log(message); // Logs "Data fetched successfully!" after 1 second
});
//************************************************************************************ */ 
//************************************************************************************ */
//  Question # 4
//  Write a function fetchWithError that returns a Promise. It should randomly either
//  resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
//  delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var success = Math.random() > 0.5; // Randomly decide success or failure
            if (success) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
// Example usage:
fetchWithError()
    .then(function (message) {
    console.log(message); // Logs "Data fetched successfully!" if resolved
})
    .catch(function (error) {
    console.error(error); // Logs "Data fetch failed!" if rejected
});
//*************************************************************************** */
//*************************************************************************** */ 
//  Question # 5
//  Write a function executeSequentially that executes two functions fetchData and 
//  processData sequentially using Promises, and logs the results in the order they are 
//  called.
function fetchData1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("fetchData executed");
            resolve("data fetched");
        }, 1000); // Simulating async operation
    });
}
function processData(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("processData executed with:", data);
            resolve("data processed");
        }, 1000); // Simulating async operation
    });
}
function executeSequentially() {
    fetchData()
        .then(function (result) {
        console.log("Result of fetchData:", result);
        return processData(result);
    })
        .then(function (result) {
        console.log("Result of processData:", result);
    })
        .catch(function (error) {
        console.error("Error occurred:", error);
    });
}
// Call the function to see the output
executeSequentially();
