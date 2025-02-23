require('./models/User')
require('./models/Track')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://admin:i6lUmplmCCdVC6WZ@cluster0.vd26z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoUri);

mongoose.connection.on('connected' , () => {
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error' , (error) => {
    console.error('Error connecting to mongo' , error);
});

app.get('/',requireAuth,(req,res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000,() => {
    console.log('Listening on port 3000'); 
});