import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {loader as landingLoader} from './pages/Landing.jsx';
import {loader as singleProduct} from './pages/SingleProduct.jsx';
import {loader as productsLoader} from './pages/Products.jsx';
import { ErrorElement } from './components'; 
import { QueryClient } from '@tanstack/react-query';

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages';



const queryClient=new QueryClient(
  {
    defaultOptions:{
      queries:{
        staleTime:1000*60*5 // 5 minutes 
      }
    }
  }
)

 

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader:productsLoader(queryClient)
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader:singleProduct(queryClient)
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};


export default App;
