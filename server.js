const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();
const PORT = 3000;

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});



const cakes = [
    
    {
        name: "Chocolate Fudge Cake",
        price: 2500
    },
    {
        name: "Vanilla Dream Cake",
        price: 2800
    },
    {
        name: "Carrot Cake",
        price: 2900
    },
    {
        name: "Strawberry Shortcake",
        price: 3000
    },
    {
        name: "Red Velvet Cake",
        price: 3200
    },
    {
        name: "Mango Cream Cake",
        price: 3100
    },
    {
        name: "Cheesecake",
        price: 3300
    },
    {
        name: "Chocolate Truffle Cake",
        price: 3400
    },
    {
        name: "Oreo Cake",
        price: 3200
    },
    {
        name: "Strawberry Chocolate Cake",
        price: 3300
    },
    {
        name: "Blueberry Lemon Cake",
        price: 3100
    },
    {
        name: "Birthday Celebration Cake",
        price: 3500
    },

    // All Our Cakes
    {
        name: "Black Forest Cake",
        price: 3500
    },
    {
        name: "Lemon Drizzle Cake",
        price: 2600
    },
    {
        name: "White Forest Cake",
        price: 3600
    },
    {
        name: "Butterscotch Cake",
        price: 3000
    },
    {
        name: "Blueberry Cheesecake",
        price: 3400
    },
    {
        name: "Chocolate Layer Cake",
        price: 3200
    },
    {
        name: "Vanilla Berry Cake",
        price: 3100
    },
    {
        name: "Coconut Cake",
        price: 2900
    },
    {
        name: "Oreo Cream Cake",
        price: 3300
    },
    {
        name: "Birthday Special Cake",
        price: 3500
    },
    {
        name: "Fruit Cream Cake",
        price: 3200
    },
    {
        name: "Caramel Cake",
        price: 3100
    }
];



app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));



function getLocalResponse(message) {

    const text = message.toLowerCase().trim();

   

    if (
        text === "hi" ||
        text === "hello" ||
        text === "hey" ||
        text === "h" ||
        text === "good morning" ||
        text === "good afternoon" ||
        text === "good evening"
    ) {
        return "Hello! 🍰 How can I help you choose the perfect cake today?";
    }

    // THANK YOU

    if (
        text === "thanks" ||
        text === "thank you" ||
        text.includes("thank you")
    ) {
        return "You're very welcome! 💕 Enjoy your cake! 🍰";
    }

    
    if (
        text === "bye" ||
        text === "goodbye"
    ) {
        return "Goodbye! 💕 Have a sweet day! 🍰";
    }

   
    if (
        text === "help" ||
        text === "what can you do"
    ) {
        return "I can help you choose cakes, check prices, recommend cakes for special occasions, and suggest cakes based on your budget. 🎂";
    }

   

    const cake = cakes.find(cake =>
        text.includes(cake.name.toLowerCase())
    );


    if (
        cake &&
        (
            text.includes("price") ||
            text.includes("cost") ||
            text.includes("how much") ||
            text.includes("worth")
        )
    ) {
        return `${cake.name} is Rs. ${cake.price.toLocaleString()}. 🎂`;
    }



    if (cake) {
        return `${cake.name} is available for Rs. ${cake.price.toLocaleString()}. 🍰`;
    }



    if (
        text.includes("what cakes") ||
        text.includes("available cakes") ||
        text.includes("cake menu") ||
        text.includes("cake list") ||
        text.includes("all cakes") ||
        text.includes("show me cakes") ||
        text.includes("what do you have")
    ) {

        return `We have ${cakes.length} delicious cakes available! 🎂

            Some popular choices are:
            • Chocolate Fudge Cake
            • Red Velvet Cake
            • Oreo Cake
            • Chocolate Truffle Cake
            • Black Forest Cake
            • Strawberry Chocolate Cake

            You can ask me about any cake and its price. 🍰`;
                }


    if (
        text.includes("birthday")
    ) {

        return `For a birthday, I'd recommend:

            🎂 Birthday Celebration Cake — Rs. 3,500
            🎂 Birthday Special Cake — Rs. 3,500
            🍫 Chocolate Fudge Cake — Rs. 2,500
            ❤️ Red Velvet Cake — Rs. 3,200

            If you tell me your budget and how many people you're serving, I can recommend the best option.`;
                }

    

    if (
        text.includes("anniversary")
    ) {

        return `For an anniversary, some lovely choices are:

            ❤️ Red Velvet Cake — Rs. 3,200
            🍓 Strawberry Chocolate Cake — Rs. 3,300
            🍫 Chocolate Truffle Cake — Rs. 3,400

            If you tell me your budget, I can help you choose one.`;
                }

    

    if (
        text.includes("wedding")
    ) {

        return `For a wedding celebration, I'd recommend choosing a cake based on the number of guests and your preferred style. 🎂

Tell me your budget and approximately how many guests you have, and I can suggest suitable options.`;
    }

    

    if (
        text.includes("chocolate cake") ||
        text.includes("chocolate cakes")
    ) {

        return `Our chocolate options include:

🍫 Chocolate Fudge Cake — Rs. 2,500
🍫 Chocolate Truffle Cake — Rs. 3,400
🍫 Strawberry Chocolate Cake — Rs. 3,300
🍫 Chocolate Layer Cake — Rs. 3,200

The Chocolate Fudge Cake is our most affordable chocolate option.`;
    }

    
    if (
        text.includes("cheesecake")
    ) {

        return `We have:

🍰 Cheesecake — Rs. 3,300
🫐 Blueberry Cheesecake — Rs. 3,400

Both are great choices if you enjoy creamy, rich desserts.`;
    }

   

    if (
        text.includes("cheapest") ||
        text.includes("cheaper") ||
        text.includes("cheap cake") ||
        text.includes("lowest price")
    ) {

        const cheapestCake = cakes.reduce((lowest, cake) =>
            cake.price < lowest.price ? cake : lowest
        );

        return `Our most affordable cake is the ${cheapestCake.name} at Rs. ${cheapestCake.price.toLocaleString()}. 🍰`;
    }

    

    if (
        text.includes("under 3000") ||
        text.includes("below 3000") ||
        text.includes("less than 3000") ||
        text.includes("budget 3000")
    ) {

        const budgetCakes = cakes.filter(cake =>
            cake.price <= 3000
        );

        const list = budgetCakes
            .map(cake =>
                `• ${cake.name} — Rs. ${cake.price.toLocaleString()}`
            )
            .join("\n");

        return `Here are cakes available for Rs. 3,000 or less:

${list}

I can also recommend the best one for your occasion. 🎂`;
    }

    

    if (
        text.includes("how many cakes") ||
        text.includes("how many cake")
    ) {

        return `We currently have ${cakes.length} cakes in our catalogue. 🎂`;
    }

    

    return null;
}


app.post("/api/chat", async (req, res) => {

    try {

        const { message } = req.body;

       
        if (!message || !message.trim()) {

            return res.status(400).json({
                error: "Please enter a message."
            });

        }

        
        const localResponse = getLocalResponse(message);

        if (localResponse) {

            console.log("🍰 Local response used");

            return res.json({
                reply: localResponse,
                source: "local"
            });

        }

        

        console.log("🤖 Gemini request used");

        const prompt = `
            You are "Icy", the friendly AI assistant for The Icing Room Cake Shop.

            Your role is to help customers choose cakes.

            You can help customers with:
            - Birthday cakes
            - Anniversary cakes
            - Wedding cakes
            - Celebration cakes
            - Cake flavors
            - Cake recommendations
            - Budget-based recommendations
            - Cake sizes
            - Number of people a cake can serve

            IMPORTANT RULES:

            - Do NOT introduce yourself.
            - Do NOT say "Hi, I'm Icy".
            - Answer the customer's message directly.
            - Keep replies friendly and concise.
            - Keep responses reasonably short.
            - Use Sri Lankan Rupees (LKR) when discussing prices.
            - Never invent a product.
            - Never invent a price.
            - Only recommend cakes from the catalogue.
            - If you don't know something, honestly say you don't know.
            - Ask follow-up questions when necessary.
            - You can use cake-related emojis occasionally.
            - If someone asks something unrelated to the cake shop, politely explain that you specialize in helping with cakes.

            CAKE CATALOGUE:

            ${cakes.map(cake =>
                `- ${cake.name} — Rs. ${cake.price.toLocaleString()}`
            ).join("\n")}

            Customer message:

            ${message}
                    `;

                    const response = await ai.models.generateContent({
                        model: "gemini-3.6-flash",
                        contents: prompt
                    });

                    const reply = response.text;

                

                    res.json({
                        reply: reply,
                        source: "gemini"
                    });

                } catch (error) {

                    console.error("Gemini API Error:", error);

                

                    if (error.status === 429) {

                        return res.status(429).json({
                            error: "Icy has temporarily reached the free AI request limit. Please try again later. 🍰"
                        });

                    }


                    return res.status(500).json({
                        error: "Sorry, Icy is temporarily unavailable. Please try again later. 🍰"
                    });

                }

            });



            app.listen(PORT, () => {

                console.log(
                    `🍰 The Icing Room is running at http://localhost:${PORT}`
                );

            });