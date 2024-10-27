function sendMessage() {
    const chatBox = document.getElementById("chat-box");
    const input = document.getElementById("chat-input");

    if (input.value.trim() !== "") {
        // Create user's message
        const userMessage = document.createElement("div");
        userMessage.textContent = input.value;
        userMessage.classList.add("user-message");
        chatBox.appendChild(userMessage);

        // Auto-scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
        input.value = ""; // Clear input field

        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement("div");
            botMessage.textContent = "This is a bot response!";
            botMessage.classList.add("bot-message");
            chatBox.appendChild(botMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000); // Bot response delay
    }
}
