const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join('.env') });
const router = require('./routes/index');
const connectDB = require("./utils/connectDb")

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({
        message: 'You found the MES Portal API!',
        success: true,
    });
});

app.use('/api', router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));