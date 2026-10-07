```javascript
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    // Display user message
    addMessage(message, "user");

    userInput.value = "";

    // Generate bot response
    setTimeout(function () {

        const response = getBotResponse(message);

        addMessage(response, "bot");

    }, 500);
}


function addMessage(message, sender) {

    const messageDiv = document.createElement("div");

    if (sender === "user") {
        messageDiv.className = "user-message";
    } else {
        messageDiv.className = "bot-message";
    }

    messageDiv.innerHTML = message;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}


function getBotResponse(message) {

    message = message.toLowerCase();

    if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey")
    ) {
        return "Hello! 👋 Nice to meet you.";
    }

    if (message.includes("name")) {
        return "My name is My AI Chatbot 🤖.";
    }

    if (
        message.includes("how are you") ||
        message.includes("how are u")
    ) {
        return "I am doing great! 😊 How can I help you?";
    }

    if (message.includes("github")) {
        return "GitHub is a platform used to store, manage and share code. 💻";
    }

    if (message.includes("html")) {
        return "HTML is used to create the structure of webpages. 🌐";
    }

    if (message.includes("css")) {
        return "CSS is used to design and style webpages. 🎨";
    }

    if (
        message.includes("javascript") ||
        message.includes("js")
    ) {
        return "JavaScript makes webpages interactive and dynamic. ⚡";
    }

    if (message.includes("python")) {
        return "Python is a popular programming language used for AI, ML, data science and many other applications. 🐍";
    }

    if (
        message.includes("ai") ||
        message.includes("artificial intelligence")
    ) {
        return "Artificial Intelligence enables computers to perform tasks that normally require human intelligence. 🤖";
    }

    if (
        message.includes("thank") ||
        message.includes("thanks")
    ) {
        return "You're welcome! 😊";
    }

    if (
        message.includes("bye") ||
        message.includes("goodbye")
    ) {
        return "Goodbye! 👋 Have a great day!";
    }

    return "Sorry, I don't understand that yet. 🤔 Try asking me about GitHub, HTML, CSS, JavaScript, Python or AI.";
}


function clearChat() {

    chatBox.innerHTML = `
        <div class="bot-message">
            Chat cleared! 👋<br>
            How can I help you?
        </div>
    `;
}


// Press Enter to send
userInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});
```
