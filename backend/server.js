const express = require('express');
const cors = require('cors');
const homeData = require('./data/home');
const aboutData = require('./data/about');
const missionsData = require('./data/missions');
const technologyData = require('./data/technology');
const contactData = require('./data/contact');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// API Endpoints
app.get('/api/home', (req, res) => {
    res.json(homeData);
});

app.get('/api/about', (req, res) => {
    res.json(aboutData);
});

app.get('/api/missions', (req, res) => {
    res.json(missionsData);
});

app.get('/api/technology', (req, res) => {
    res.json(technologyData);
});

app.get('/api/contact', (req, res) => {
    res.json(contactData);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
