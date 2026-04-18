const express = require('express');
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
require("dotenv").config();
const app = express();
const port = 8000;

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('Deployment successful!');
});
app.listen(port, () => {
  console.log(`Deployment app listening at http://localhost:${port}`);
});