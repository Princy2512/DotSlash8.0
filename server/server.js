require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const axios = require('axios');
const mongoose = require('mongoose');
const { Server } = require('ws');
const File = require("./models/fileModel");
const Chat = require("./models/chatModel");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Log environment variables to check if they are loaded
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
console.log('BIOBERT_API:', process.env.BIOBERT_API);
console.log('CLINICALBERT_API:', process.env.CLINICALBERT_API);
console.log('SCIBERT_API:', process.env.SCIBERT_API);
console.log('DISTILBERT_API:', process.env.DISTILBERT_API);
console.log('BLOOM_API:', process.env.BLOOM_API);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

// Define storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage: storage });

const wss = new Server({ server });
wss.on('connection', (ws) => {
    console.log('New WebSocket connection established');

    ws.on('message', async (message) => {
        console.log(`Received: ${message}`);

        const userMessage = message.toString();

        // Placeholder: Respond with a static message (Replace this with AI integration)
        const botResponse = `Echo: ${userMessage}`;

        // Save chat to DB
        const newChat = new Chat({ userMessage, botResponse });
        await newChat.save();

        // Send bot response back to client
        ws.send(botResponse);
    });

    ws.on('close', () => console.log('WebSocket connection closed'));
});

// API Route to process text using AI models
app.post("/get-ai-response", async (req, res) => {
    const { text, model } = req.body;

    const MODEL_APIS = {
        bioBERT: process.env.BIOBERT_API,
        clinicalBERT: process.env.CLINICALBERT_API,
        sciBERT: process.env.SCIBERT_API,
        distilBERT: process.env.DISTILBERT_API,
        bloom: process.env.BLOOM_API,
    };

    if (!text || !model || !MODEL_APIS[model]) {
        return res.status(400).json({ error: "Invalid request. Provide text and a valid model name." });
    }

    try {
        const response = await axios.post(MODEL_APIS[model], { text });
        res.json({ aiResponse: response.data });
    } catch (error) {
        console.error("Error fetching AI response:", error.message);
        res.status(500).json({ error: "Failed to fetch AI response" });
    }
});


//file upload
app.post("/upload", upload.single("file"), async (req, res) => {
    try {
        const { originalname, path, mimetype } = req.file;

        // Save file details to the database
        const newFile = new File({ filename: originalname, filePath: path, fileType: mimetype });
        await newFile.save();
        console.log('File saved:', newFile);

        res.status(200).json({ message: "File uploaded successfully!", file: newFile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error uploading file" });
    }
});

//fetch all uploaded files
app.get("/files", async (req, res) => {
    try {
        const files = await File.find();
        res.json(files);
    } catch (error) {
        res.status(500).json({ error: "Error fetching files" });
    }
});

//save chat messages
app.post("/save-chat", async (req, res) => {
    try {
        const { userMessage, botResponse } = req.body;

        const newChat = new Chat({ userMessage, botResponse });
        await newChat.save();
        console.log('Chat saved:', newChat);

        res.status(200).json({ message: "Chat saved successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//fetch all saved chats
app.get("/chats", async (req, res) => {
    try {
        const chats = await Chat.find();
        res.json(chats);
    } catch (error) {
        res.status(500).json({ error: "Error fetching chat history" });
    }
});


// Predict diagnosis based on symptoms
app.post('/predict', (req, res) => {
    const { symptoms } = req.body;

    if (!symptoms || symptoms.length < 1) {
        return res.status(400).json({ error: 'Enter the symptoms' });
    }

    // Replace with actual AI prediction later
    const diagnosis = "flu";
    res.json({ diagnosis });
});


// Voice-to-text transcription (Placeholder)
app.post("/voice-to-text", upload.single("file"), async (req, res) => {
    try {
        res.json({ text: "This is the transcribed text from the audio" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }b 
});

// Test route
app.get('/', (req, res) => {
    res.send('Disease prediction API is running');
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle errors
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please use a different port.`);
        process.exit(1);
    } else {
        throw err;
    }
});
