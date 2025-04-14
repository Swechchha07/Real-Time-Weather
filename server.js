// server/server.js

const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weather");

const app = express();
const PORT = process.env.PORT || 2500;

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/weather", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
