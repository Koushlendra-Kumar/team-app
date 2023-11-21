const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose')

const userRouter = require('./routes/user');
const teamRouter = require('./routes/team');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 5000;

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/users', userRouter);

app.use('/api/team', teamRouter);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})