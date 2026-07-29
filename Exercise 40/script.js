function delayMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("Operation completed successfully!");
            } else {
                reject("Operation failed!");
            }
        }, 2000);
    });
}

async function displayMessage() {
    try {
        console.log("Start fetching data...");

        const message = await delayMessage();

        console.log("Success:", message);
    } catch (error) {
        console.error("Error:", error);
    }
}

displayMessage();

console.log("This message runs immediately.");