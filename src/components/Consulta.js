import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import './Consulta.css'

import api from './../api/api'

export default function Consulta(){

    const [cep, setCep] = useState('');
    const [dados, setDados] = useState('');
    const [erroCep, setErroCep] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        const response = await api.get(`/${cep}/json`)
        const data = response.data 
        setDados(data)
        setErroCep("")
        console.log(response.data)
        // console.log(dados)

        if (data.erro == true){
            console.log("Não Há Nada Aqui !")
            const msgErroCep = "Este CEP não está cadastrado em nossa Base de Dados"
            setErroCep(msgErroCep)
        }
        else {

        }
    }

       

    return(

        <div className="divComponents">
            <Grid item xs={12}>
                <div className="divComponentsSearch">
                    <form onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-name"
                        className="outlined-name"
                        label="Consulte o CEP"
                        margin="normal"
                        variant="outlined"
                        value={cep}
                        onChange={event => setCep(event.target.value)}
                   />

                    <Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="btnConsultar">
                        Consultar
                    </Button>

                    </form>
                </div>
            </Grid>

                <Grid item xs={12}>
                    <div className="divComponentsResponse">
                    <SnackbarContent
                            className="formDados"
                            message= {dados.cep}
                        />
                        <SnackbarContent
                            className="formDadosCep"
                            message= {dados.logradouro}
                        />
                        <SnackbarContent
                            className="formDadosCep"
                            message= {dados.bairro}
                        />
                        <SnackbarContent
                            className="formDadosCep"
                            message= {dados.localidade}
                        />
                        <SnackbarContent
                            className="formDadosCep"
                            message= {dados.uf}
                        />
                        <h4>{erroCep}</h4>

                    </div>

                </Grid>

               
            </div>


        
            
            
    )
}

