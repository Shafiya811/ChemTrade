const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

app.use(bodyParser.json());

// here enter the database URI
const mongoURI = 'mongodb+srv://rahuldeka072:t0uugkxbEwBOjTWF@cluster.icddpgo.mongodb.net/?retryWrites=true&w=majority&appName=CLUSTER';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});