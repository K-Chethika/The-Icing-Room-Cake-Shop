# 🎂 The Icing Room – Cake Shop

A modern and responsive **cake shop e-commerce website** with an integrated **AI-powered chatbot** designed to provide customers with an engaging and helpful online cake-shopping experience.

The **Icing Room** allows customers to browse cakes, explore the shop, interact with authentication features, and communicate with an AI chatbot for assistance.

---

## 🌟 Features

### 🏠 Home Page

* Attractive hero section
* Featured cake products
* Easy navigation
* Call-to-action sections
* Modern cake-shop design

### 🎂 Cake Product Catalog

* Browse different cake products
* Display cake images and prices
* Prices displayed in **Sri Lankan Rupees (LKR)**
* Attractive product cards
* Organized product presentation

### 🤖 AI-Powered Chatbot

The website includes an **AI-powered customer support chatbot** that helps users interact with the cake shop.

The chatbot can:

* Answer customer questions
* Provide information about cakes
* Help users explore available products
* Respond to customer requests
* Provide a conversational shopping experience

The chatbot is connected to the **Google Gemini API** to generate AI-powered responses.

### 🔐 User Authentication

* User registration
* User login
* Forgot password functionality
* Form validation
* User-friendly authentication interface

### 📖 About Us

* Information about The Icing Room
* Brand-focused presentation
* Clean and informative layout


### ✨ UI/UX

* Modern and clean interface
* Smooth animations
* Responsive layouts
* CSS Grid and Flexbox
* Consistent typography and spacing
* User-friendly navigation

---

## 🛠️ Technologies Used

| Technology            | Purpose                       |
| --------------------- | ----------------------------- |
| **HTML5**             | Website structure             |
| **CSS3**              | Styling and responsive design |
| **JavaScript**        | Frontend interactivity        |
| **Node.js**           | Backend runtime               |
| **Express.js**        | Backend/server framework      |
| **Google Gemini API** | AI chatbot                    |
| **CSS Grid**          | Responsive layouts            |
| **Flexbox**           | Component alignment           |
| **Font Awesome**      | Icons                         |
| **Git & GitHub**      | Version control               |

---

## 🧠 AI Chatbot Architecture

The chatbot uses a simple client-server architecture.

```text
┌───────────────────────┐
│       Customer        │
│                       │
│  Sends message to AI  │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│      Frontend         │
│   HTML / CSS / JS     │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│     Express.js        │
│       Backend         │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│   Google Gemini API   │
│     AI Response       │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│    Chatbot Response   │
│       to Customer     │
└───────────────────────┘
```

The API key is stored securely using environment variables rather than being exposed directly in the frontend code.

---

## 📂 Project Structure

```text
The-Icing-Room-Cake-Shop/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── ...
│
├── server.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

> The project structure may change as new features are added.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/K-Chethika/The-Icing-Room-Cake-Shop.git
```

### 2. Navigate to the Project

```bash
cd The-Icing-Room-Cake-Shop
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure the Environment Variables

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
```

**Important:** Never upload your `.env` file or expose your Gemini API key publicly.

### 5. Start the Server

```bash
node server.js
```

The application will run locally at:

```text
http://localhost:3000
```

---

## 💬 Chatbot Example

A customer can interact with the chatbot to ask questions such as:

```text
Customer:
What cakes do you have?

AI:
We have a variety of cakes available.
You can explore our cake collection and choose
your favorite one.
```

The chatbot provides a conversational way for customers to interact with the website.

---

## 📸 Screenshots

### 🏠 Home Page

```text
![Home Page](screenshots/home.png)
```

### 🎂 Cake Collection

```text
![Cake Collection](screenshots/cakes.png)
```

### 🤖 AI Chatbot

```text
![AI Chatbot](screenshots/chatbot.png)
```

### 🔐 Login

```text
![Login](screenshots/login.png)
```

### 📝 Registration

```text
![Registration](screenshots/register.png)
```

---

## 📚 What I Learned

Through this project, I gained practical experience in:

* Building a complete responsive website
* Developing frontend interfaces using HTML, CSS, and JavaScript
* Creating responsive layouts using CSS Grid and Flexbox
* Building a Node.js and Express.js backend
* Integrating the **Google Gemini API**
* Developing an AI-powered chatbot
* Working with REST API requests
* Handling environment variables securely
* Implementing authentication interfaces
* Creating an e-commerce-style product catalog
* Improving UI/UX
* Using Git and GitHub for version control

---


## 🎯 Project Goals

The main goals of this project are to:

1. Create a professional online platform for a cake shop.
2. Provide customers with an easy way to browse cakes.
3. Provide an interactive AI-powered customer support experience.
4. Practice frontend and backend web development.
5. Learn how to integrate generative AI into a real-world application.
6. Build a project suitable for a software engineering portfolio.

---

## 👩‍💻 Author

**Kavindi Chethika**

Software Engineering Undergraduate
Sri Lanka

### GitHub

https://github.com/K-Chethika

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub!

---

## 📄 License

This project was created for **educational and portfolio purposes**.
