import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import App from './App'
import { Layout } from './assets/components/Layout/Layout'
import { BUSCADOR_URL, HOME_URL,LOGIN_URL,REGISTER_URL } from './assets/constants/urls'
import { Login } from './assets/pages/LoginPage/Login';
import { Register } from './assets/pages/RegisterPage/Register';
//import { Buscador } from './assets/pages/Buscador/Buscador';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path = {HOME_URL} element={<App/>}/>
          <Route path = {LOGIN_URL} element={<Login />}/>
          <Route path={REGISTER_URL} element={<Register />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

//<Route path={BUSCADOR_URL} element = {<Buscador />}/>