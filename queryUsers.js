const mongoose = require("mongoose");
const User = require("./models/userAuthModel");
const Product = require("./models/productsModel"); // Adjust this to match your `item` model
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const user = await User.findById("674690b3b60aa2b7e075b1e9");
    const item = await Product.findById("6742f3ebc148d1e30b36f6fd");

    console.log("User:", user);
    console.log("Item:", item);

    process.exit();
  })
  .catch(err => console.error("Connection failed:", err));


  