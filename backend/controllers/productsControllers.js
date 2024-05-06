const productDB = require("../models/productModels");
const ErrorHandler = require("../utils/errorHandler");
const expressAsyncHandler = require("express-async-handler");
const APIFeatures = require("../utils/apiFeatures");

/// GET get products - /api/products
const getProducts = expressAsyncHandler(async (req, res, next) => {

  // const resPerPage = 12;



  let buildQuery = () => {
    return new APIFeatures(productDB.find(), req.query).search().filter()
  }

  const filteredProductCount = await buildQuery().query.countDocuments()
  const totalProductCount = await productDB.countDocuments()

  let productsCount = totalProductCount;

  if (filteredProductCount !== totalProductCount) {
    productsCount = filteredProductCount
  }

  const products = await buildQuery().query;
  // const products = await buildQuery().paginate(resPerPage).query;

  let totalSearchProducts = new APIFeatures(productDB.find(), req.query).search()
  totalSearchProducts = await totalSearchProducts.query

  res.status(201).json({
    success: true,
    productsCount,
    products,
    totalSearchProducts
  });
});

/// GET get single product - /api/product/:id
const getSingleProduct = expressAsyncHandler(async (req, res, next) => {

  const product = await productDB.findById(req.params.id)
  if (!product) {
    return next(new ErrorHandler("product not found", 400));
  }
  res.status(201).json({
    success: true,
    product,
  });
});

////////////////////////////////////////////////////////////////////////////
// ADMIN

// GET admin products - api/admin/products
const getAdminProducts = expressAsyncHandler(async (req, res, next) => {

  const products = await productDB.find()

  res.status(200).json({
    success: true,
    products
  });
});

// POST create product - /api/admin/product/new
const newProduct = expressAsyncHandler(async (req, res) => {

  //uploading images
  let images = []

  let BASE_URL = process.env.BACKEND_URL;
  if (process.env.NODE_ENV === 'production') {
    BASE_URL = `${req.protocol}://${req.get('host')}`
  }

  if (req.files.length > 0) {
    req.files.forEach((file) => {
      let url = `${BASE_URL}/uploads/product/${file.originalname}`
      images.push({ image: url })
    })
  }

  req.body.images = images
  req.body.user = req.user.id

  const product = await productDB.create(req.body);

  res.status(201).json({
    success: true,
    product: product,
  });
});

/// PUT Update product - /api/products/:id
const updateProduct = expressAsyncHandler(async (req, res) => {
  const product = await productDB.findById(req.params.id);

  //uploading images
  let images = []

  //if images not cleared keep existing images 
  if (req.body.imagesCleared === 'false') {
    images = product.images
  }


  let BASE_URL = process.env.BACKEND_URL;
  if (process.env.NODE_ENV === 'production') {
    BASE_URL = `${req.protocol}://${req.get('host')}`
  }


  if (req.files.length > 0) {
    req.files.forEach((file) => {
      let url = `${BASE_URL}/uploads/product/${file.originalname}`
      images.push({ image: url })
    })
  }

  req.body.images = images

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  const updatedproduct = await productDB.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  res.status(201).json({
    success: true,
    product: updatedproduct,
  });
});

/// DELETE Delete product - /api/products/:id
const deleteProduct = expressAsyncHandler(async (req, res) => {
  const product = await productDB.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  await productDB.findByIdAndDelete(req.params.id);

  res.status(201).json({
    success: true,
    message: "product deleted",
  });
});



module.exports = {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getAdminProducts
};
