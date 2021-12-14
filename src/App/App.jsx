import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/Header/Header'
import Aside from '../components/Aside/Aside'
import Routes from './Routes'
import Footer from '../components/Footer/Footer'

import 'material-icons/iconfont/material-icons.css'

import '../index.css'

export default function App() {
    return (
        <BrowserRouter>
            <div className="app bg-gray-100 h-screen ">
                <Header />
                <Aside />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}