import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Product from './components/Product';
import Login from './components/User/Login';
import Register from './components/User/Register';
import SearchPage from './components/SearchPage';
import Wishlist from './components/Wishlist';
import { Toaster } from 'react-hot-toast';
import AccountPage from './components/AccountPage';
import ProtectedRoute from './components/layouts/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/userActions';
import { useEffect } from 'react';
import UpdateProfile from './components/User/UpdateProfile';

import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import CreateProduct from './components/admin/CreateProduct';
import UpdateProduct from './components/admin/UpdateProduct';
import UsersList from './components/admin/UsersList';
import UpdateUser from './components/admin/UpdateUser';
import Category from './components/Category';
import AboutUs from './components/layouts/AboutUs';
import FrequentlyAskedQuestions from './components/layouts/FrequentlyAskedQuestions';
import TermsAndCondition from './components/layouts/TermsAndCondition';
import PrivacyPolicy from './components/layouts/PrivacyPolicy';
import ShippingRefundPolicy from './components/layouts/ShippingRefundPolicy';

import whatsapp from './img/whatsapp.png'
import insta from './img/insta.png'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser)

  }, [dispatch])

  return (
    <>
      <BrowserRouter>

        <HelmetProvider>

          <Toaster
            position="top-center"
            reverseOrder={false}
          />

          <div className='tw-fixed tw-z-20 tw-bottom-24 md:tw-bottom-28 tw-right-4 '>
            <a href="https://www.instagram.com/ankavi_silks/" target="_blank" rel="noreferrer"><img src={insta} alt="" className='tw-w-12 tw-cursor-pointer ' /></a>
          </div>

          <div className='tw-fixed tw-z-20 tw-bottom-9  tw-right-4 '>
            <a href="https://wa.me/message/K5QMIYFV2RBRO1" target="_blank" rel="noreferrer"><img src={whatsapp} alt="" className='tw-w-12 tw-cursor-pointer ' /></a>
          </div>


          <Routes>


            <Route path='/' element={<Home />} />
            <Route path='/saares/:category' element={<Category />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path="/search/:keyword" element={<SearchPage />} />
            <Route path="/wishlist" element={<Wishlist />} />

            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/frequently-asked-questions" element={<FrequentlyAskedQuestions />} />
            <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/shipping-and-refund-policy" element={<ShippingRefundPolicy />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/account" element={<ProtectedRoute> <AccountPage /> </ProtectedRoute>} />
            <Route path="/update" element={<ProtectedRoute> <UpdateProfile /> </ProtectedRoute>} />

            <Route path="/admin/dashboard" element={<ProtectedRoute isAdmin> <Dashboard /> </ProtectedRoute>} />
            <Route path="/admin/products" element={<ProtectedRoute isAdmin> <ProductsList /> </ProtectedRoute>} />
            <Route path="/admin/product/create" element={<ProtectedRoute isAdmin> <CreateProduct /> </ProtectedRoute>} />
            <Route path="/admin/product/:id" element={<ProtectedRoute isAdmin> <UpdateProduct /> </ProtectedRoute>} />

            <Route path="/admin/users" element={<ProtectedRoute isAdmin> <UsersList /> </ProtectedRoute>} />
            <Route path="/admin/user/:id" element={<ProtectedRoute isAdmin> <UpdateUser /> </ProtectedRoute>} />



          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
