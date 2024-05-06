const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
    maxLength: [100, "product name cannot exceed 100 characters"],
  },

  category: {
    type: String,
    required: [true, "please enter product category"],
  },

  price: {
    type: Number,
    required: [true, "please enter price"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "please enter product description"],
  },
  zari: {
    type: String,
    required: [true, "please enter product zari"],
  },
  // note: {
  //   type: String,
  //   required: [true, "please enter product note"],
  // },
  fabric: {
    type: String,
    required: [true, "please enter product material"],
  },
  // washcare: {
  //   type: String,
  //   required: [true, "please enter product wash care"],
  // },
  weight: {
    type: String,
    required: [true, "please enter product weight"],
  },
  stock: {
    type: Number,
    required: [true, "please product stock"],
  },
  video_link: String,
  
  images: [
    {
      image: {
        type: String,
        required: [true, "please add at least one images"]
      },
    },

  ],
  user: {
    type: mongoose.Schema.ObjectId
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('product', productSchema);