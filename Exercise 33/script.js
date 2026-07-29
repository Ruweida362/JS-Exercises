function changeContent() {
            // Select the elements
            const header = document.querySelector("#header");
            const paragraph = document.querySelector("#paragraph");
            const message = document.querySelector("#message");

            // Change plain text
            header.textContent = "Welcome to the DOM!";

            // Change HTML content
            paragraph.innerHTML =
                "This paragraph has been <strong>updated</strong>.";

            message.innerHTML =
                "<h2>Content Changed!</h2><p>The button was clicked successfully.</p>";

            console.log("The page content has been changed.");
        }