const productDB = require("../models/productModels");
const productData = require("../data/product.json");
const dotenv = require('dotenv');
const path = require("path");
const connectDatabase = require('../config/database')

dotenv.config({ path: path.join(__dirname,'..',"config", ".env") });


connectDatabase();

const seedProducts = async () => {
  try {
    await productDB.deleteMany();
    console.log("product deleted!");

    await productDB.insertMany(productData);
    console.log("product added!");
  } catch (e) {
    console.log(e.message);
  }
  process.exit();
};

seedProducts();