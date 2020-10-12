import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import Routes from './routes'
import Menu from '../template/menu'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)