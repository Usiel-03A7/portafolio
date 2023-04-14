import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './navbar'
import './index.css'
import Inicio from './inicio'
import Proyectos from './proyectos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Nav />
    <Inicio />
    <Proyectos />
  </>
)
