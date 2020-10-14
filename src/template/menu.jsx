import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    Logo Marielle
                </a>
            </div>
            <div id='navbar' className='navbar-collapse'>
                <ul className="nav navbar-nav">
                    <li><a href='#/ocorrencias/dashboard'>Relatorios</a></li>
                    <li><a href='#/ocorrencias/novo'>Reportar</a></li>
                </ul>
            </div>
        </div>
    </nav>
)