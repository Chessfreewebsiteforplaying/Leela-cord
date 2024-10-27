function sendMessage() {
    const chatBox = document.getElementById("chat-box");
    const input = document.getElementById("chat-input");

    if (input.value.trim() !== "") {
        const message = document.createElement("div");
        message.textContent = input.value;
        chatBox.appendChild(message);
        
        chatBox.scrollTop = chatBox.scrollHeight; // Tự động cuộn xuống cuối
        input.value = ""; // Xóa nội dung input sau khi gửi
    }
}
