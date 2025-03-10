import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Home from './Pages/Home';
import ProductDetails from './Pages/Productdetails';
import { Provider } from 'react-redux';
import store from './store.js';
import CartPage from './Pages/CartPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';
import Profile from './Pages/Profile.jsx';
import ShippingPage from './Pages/ShippingPage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import PaymentPage from './Pages/PaymentPage.jsx';
import PlaceOrder from './Pages/PlaceOrder.jsx';





const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />}/>
      <Route path='/product/:id' element={<ProductDetails />}/>
      <Route path='/cart' element={<CartPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/profile' element={<Profile />}/>

      <Route path="" element={<PrivateRoute/>}>
        <Route path='/shipping' element={<ShippingPage />}/>
        <Route path='/payment' element={<PaymentPage />}/>
        <Route path='/placeorder' element={<PlaceOrder />}/>
      </Route>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

