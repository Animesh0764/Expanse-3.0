import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Auth from '../Auth'
import PublicInfo from '../PublicInfo'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/auth" element={<Auth />} />
            <Route path='/public-info' element={<PublicInfo />} />
        </Routes>
    )
}

export default Router