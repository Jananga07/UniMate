const express = require("express");
const mongoose = require("mongoose");


//password:jwyTvwGxaT0Ig6r9
const app = express();
const cors = require("cors");

const UserRouter =require("./Routes/UserRoutes");

// Middleware
app.use(express.json());
app.use(cors());

app.use("/Users",UserRouter);

// Routes


app.get("/", (req, res) => {
    res.send("It Is Working");
});

// MongoDB connection
mongoose
    .connect(
        "mongodb+srv://unimate1:jwyTvwGxaT0Ig6r9@cluster0.uzozmrm.mongodb.net/"
    )
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });
