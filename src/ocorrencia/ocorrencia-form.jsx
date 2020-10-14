import React, { Component } from 'react'
import axios from 'axios'
import Header from '../template/header'
import TextField from '../template/form-field'

import translate from '../constants/translate'
import ocorrencia from './ocorrencia'

export default class RelatorioForm extends Component {

    constructor(props) {
        super(props)
        this.state = ocorrencia

        this.handleChange = this.handleChange.bind(this)
        this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar() {
        axios.post(process.env.REACT_APP_BACKEND_URL + '/raw_registros_ocorrencias_ssp_sp_gov_brs', this.state)
            .then(resp => {
                if(resp.status == 200) {
                    console.log(resp.data.message)
                    window.location.href = process.env.REACT_APP_BACKEND_URL + '/raw_registros_ocorrencias_ssp_sp_gov_brs'
                    return;
                }
                //TODO: fazer tratamento de erros
                if(resp && resp.data && resp.data.data) {
                    console.log(resp)
                    //this.setState(resp.config.data)
                }
            })
    }

    handleChange(e) {
        this.state[e.target.name] = e.target.value
        this.setState(this.state)
    }

    render() {
        // TODO: fazer a visualização dos erros
        const fields = Object.keys(this.state).map(key => {
            return (
                <TextField key={key}
                    name={key}
                    label={translate.report[key]} 
                    handleChange={this.handleChange} 
                    value={this.state[key]}></TextField>
            )
        })

        return (
            <div className='form'>
                <Header name='Ocorrências' small='Cadastro'></Header>
                <div id="error_explanation">
                </div>
                <ul className="flex-outer">
                    {fields}
                    <li className="form-submit">
                        <button onClick={this.cadastrar}>Registrar</button>
                    </li>
                </ul>
            </div>
        )
    }
}