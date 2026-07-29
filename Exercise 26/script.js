// 1. Blocking Function — Synchronous

function blockingDelay() {
    const startTime = Date.now();

    // Sug ilaa 2 seconds ay dhammaadaan
    while (Date.now() - startTime < 2000) {
        // Loop-kan wuxuu joojinayaa code-ka kale
    }

    return "Blocking task finished after 2 seconds.";
}

console.log("Program started");

const message = blockingDelay();
console.log(message);

console.log("Program ended");


// 2. Non-Blocking Function — Asynchronous
function nonBlockingDelay(callback) {
    setTimeout(() => {
        callback("Non-blocking task finished after 2 seconds.");
    }, 2000);
}

console.log("Program started");

nonBlockingDelay(function (message) {
    console.log(message);
});

console.log("Program ended");