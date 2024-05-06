const express = require('express')
const app = express();
const dotenv = require("dotenv")
const path = require('path')
const cookieParser = require('cookie-parser')
const products = require("./routes/products");
const auth = require("./routes/auth");
let cors = require("cors");

dotenv.config({ path: path.join(__dirname, "config", ".env") });

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))


app.use("/api", products);
app.use("/api", auth);

// if (process.env.NODE_ENV == "production") {
app.use(express.static(path.join(__dirname, '../frontend/build')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
})
// }

app.use(require('./middleware/error'));

module.exports = app;
