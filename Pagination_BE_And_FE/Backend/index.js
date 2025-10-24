const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./config/Database");
require("dotenv").config();
const userRoutes = require("./routes/User");

const app = express();
app.use(express.json());
app.use(cors());

//connect database
dbConnect();

//routes
app.use("/api/v1", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
