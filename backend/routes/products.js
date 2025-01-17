const express = require("express");
const router = express.Router();
const { isAuthenticateUser, authorisedRole } = require('../middleware/authenticate');
const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct, getAdminProducts
} = require("../controllers/productsControllers");

const path = require('path')

const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_S3_BUCKET_REGION'
});

const s3 = new AWS.S3();
// storing imgs in s3 bucket
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'YOUR_S3_BUCKET_NAME',
    acl: 'public-read', // or 'private' if you want to restrict access
    key: function (req, file, cb) {
      cb(null, file.originalname);
      
    }
  })
});

// storing imgs in mongodb

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname, '..', 'uploads/product'))
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   })

// })

router.get("/products", getProducts);
router.get("/product/:id", getSingleProduct);

//Admin 
router.post("/admin/product/new", isAuthenticateUser, authorisedRole('admin'), upload.array('images'), newProduct);
router.get("/admin/products", isAuthenticateUser, authorisedRole('admin'), getAdminProducts);
router.put("/admin/product/:id", isAuthenticateUser, authorisedRole('admin'), upload.array('images'), updateProduct);
router.delete("/admin/product/:id", isAuthenticateUser, authorisedRole('admin'), deleteProduct);



module.exports = router;
