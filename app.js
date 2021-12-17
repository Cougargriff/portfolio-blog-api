require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/setup.js');

const app = express();
const PORT = process.env.PORT || 3001;

routes.init(app);
app.use(cors());
app.listen(PORT);
console.log(`App listening on port ${PORT}`);
