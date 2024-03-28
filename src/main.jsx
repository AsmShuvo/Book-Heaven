import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';
import Books from './components/Books.jsx';
import BookDetails from './components/BookDetails.jsx';
import ReadList from './components/ReadList.jsx';
import WishList from './components/WishList.jsx';
import Category from './components/Category.jsx';
import ContactUs from './components/ContactUs';
import BarChart from './components/Sats.jsx';
import Stats from './components/Sats.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement : <ErrorPage/>,
    children :[
      {
        path : "/",
        element: <Home/>
      },
      {
        path : "/books",
        element: <Books/>
      },
      {
        path : "/book/:bookId",
        element: <BookDetails/>,
        loader : ()=> fetch('/books.json')
      },
      {
        path : "/read",
        element: <ReadList/>
      },
      {
        path: "/category",
        element: <Category/>,
        loader: ()=> fetch('/books.json')
      }
      ,
      {
        path: "/faq",
        element: <ContactUs/>
      }
      ,
      {
        path: "/pagestoread",
        element: <Stats/>,
        loader: ()=> fetch('/books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
