const express = require('express')
const router = express.Router()
const { isAuthenticateUser, authorisedRole } = require('../middleware/authenticate')

const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserProfile, changePassword, updateProfile, getAllUser, getUser, updateUser, deleteUser } = require('../controllers/authController')
const multer = require('multer')
const path = require('path')

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '..', 'uploads/user'))
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })

})


router.post('/register', upload.single('avatar'), registerUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)
router.get('/myprofile', isAuthenticateUser, getUserProfile)
router.put('/update', isAuthenticateUser, upload.single('avatar'), updateProfile)


//admin
router.route('/admin/users').get(isAuthenticateUser, authorisedRole('admin'), getAllUser);
router.route('/admin/user/:id').get(isAuthenticateUser, authorisedRole('admin'), getUser)
    .put(isAuthenticateUser, authorisedRole('admin'), updateUser)
    .delete(isAuthenticateUser, authorisedRole('admin'), deleteUser);


module.exports = router