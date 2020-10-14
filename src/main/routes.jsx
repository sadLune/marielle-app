import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'

import Relatorio from '../ocorrencia/ocorrencia-relatorio'
import Form from '../ocorrencia/ocorrencia-form'
import Geo from '../ocorrencia/ocorrencia-geo'

export default props => (
    <HashRouter>
        <Route path='/ocorrencias/dashboard' component={Relatorio} />
        <Route path='/ocorrencias/novo' component={Form} />
        <Route path='/ocorrencias/geo' component={Geo} />
        <Redirect from='*' to='/ocorrencias/geo' />
    </HashRouter>
)