import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Casa from './routes/incial';
import Roupas from './routes/roupas';
import Escolida from './routes/roupa-escolhida';
import Cadastro from './routes/Cadastro';
import Carrinho from './routes/carrinho';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/home",
        element: <Casa/>,
      },
      {
        path:"/roupas",
        element: <Roupas/>,
      },
      {
        path:"/roupas/:idroupa",
        element: <Escolida/>,
      },
      {
        path:"/cadastro",
        element: <Cadastro/>
      },
      {
        path:'/carrinho',
        element: <Carrinho/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
