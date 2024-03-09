import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Auth from '../Auth'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/auth" element={<Auth />} />
        </Routes>
    )
}

export default Router