import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'

import Relatorio from '../ocorrencia/ocorrencia-relatorio'
import Form from '../ocorrencia/ocorrencia-form'
import Geo from '../ocorrencia/ocorrencia-geo'

export default props => (
    <HashRouter>
        <Route path='/relatorios' component={Relatorio} />
        <Route path='/reportar' component={Form} />
        <Route path='/' component={Geo} />
        <Redirect from='*' to='/' />
    </HashRouter>
)