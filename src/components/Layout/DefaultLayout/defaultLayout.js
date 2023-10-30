import React from 'react'
import Header from './Header/header'
import Sidebar from './Sidebar/sidebar'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Sidebar />
                <div className='content' >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout