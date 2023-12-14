import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AllRecords from '../pages/AllRecords'
import NotFound from '../pages/NotFound'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/all' element={<AllRecords />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='*' element={<Navigate to="/not-found" replace={true} />} />
        </Routes>

    )
}

export default Router