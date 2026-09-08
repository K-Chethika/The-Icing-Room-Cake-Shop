const chatButton = document.getElementById("chat-button");
const chatWindow = document.getElementById("chat-window");
const closeChat = document.getElementById("close-chat");
const sendButton = document.getElementById("send-button");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");



chatButton.addEventListener("click", () => {
    chatWindow.classList.add("active");
    chatInput.focus();
});




closeChat.addEventListener("click", () => {
    chatWindow.classList.remove("active");
});




sendButton.addEventListener("click", sendMessage);



chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});



async function sendMessage() {

    const message = chatInput.value.trim();

    if (!message) {
        return;
    }


    // Display user message

    addMessage(message, "user");

    chatInput.value = "";


    // Disable input while waiting

    chatInput.disabled = true;
    sendButton.disabled = true;


    // Typing indicator

    const typingMessage =
        addMessage("Icy is thinking... 🍰", "bot");


    try {

        const response = await fetch("/api/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });


        const data = await response.json();


        // Remove typing message

        typingMessage.remove();


        

        if (response.ok && data.reply) {

            addMessage(data.reply, "bot");

        }

        

        else if (data.error) {

            console.error("Chatbot Error:", data.error);

            addMessage(
                "Sorry, I couldn't answer that right now. 😔",
                "bot"
            );

        }

        

        else {

            addMessage(
                "Sorry, I couldn't understand that. 😔",
                "bot"
            );

        }


    } catch (error) {

        console.error("Connection Error:", error);

        typingMessage.remove();

        addMessage(
            "Sorry, I couldn't connect to Icy right now. 😔",
            "bot"
        );

    }


    // Enable input

    chatInput.disabled = false;
    sendButton.disabled = false;

    chatInput.focus();
}



function addMessage(message, sender) {

    const messageElement =
        document.createElement("div");


    messageElement.classList.add(
        "chat-message",
        sender
    );


    messageElement.textContent = message;


    chatMessages.appendChild(
        messageElement
    );


    chatMessages.scrollTop =
        chatMessages.scrollHeight;


    return messageElement;
}