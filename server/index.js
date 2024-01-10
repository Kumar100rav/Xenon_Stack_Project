const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require("body-parser");
const cors = require('cors');
const port = process.env.PORT || 3000;
const routes = require('./Routes/routes');
const dbConnect = require('./Config/database');
dbConnect();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
