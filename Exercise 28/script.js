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
        const message = await delayMessage();

        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

displayMessage();