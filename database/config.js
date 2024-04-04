const mongoose = require("mongoose");

try {
    mongoose.connect("mongodb://localhost:27017/registration");
    console.log("MongoDB connected successfully!");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

   