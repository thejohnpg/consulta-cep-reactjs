import React, { useState } from "react";

import { MdDeleteForever } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

import api from "./../api/api";
import { cepMask } from "./Mask";

import "./Consulta.css";

export default function Consulta() {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState("");
  const [errorDataCep, setErrorDataCep] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    
    // validators client side
    if (cep.length < 9) {
        setDados("");
        setErrorDataCep("Por favor, digite um CEP válido");
        return
    }    
    
    // request server side
    const response = await api.get(`/${cep}/json`);
    const data = response.data;
    setDados(data);

    // errors server side
    if (data.erro) {
      setDados("");
      setErrorDataCep("Este CEP não está cadastrado em nossa Base de Dados");
      return
    }

    // ok !
    setDados(data);
    setErrorDataCep("");
  }
  function handleChange(event) {
    setCep(cepMask(event.target.value));
  }

  function clearContent(event) {
    setCep("");
    setDados("");
    setErrorDataCep("");
  }

  return (
    <div className="container">
      <div className="component-search">
        <form onSubmit={handleSubmit}>
          <input
            id="input-cep"
            label="Consulte o CEP"
            value={cep}
            onChange={handleChange}
            maxLength="9"
            autoFocus
          ></input>

          <button type="submit" className="btn-find">
              <IoMdSend className="icon-send" />
              <span>Consultar</span>
          </button>
          <button type="button" className="btn-clean" onClick={clearContent}>
            <span>Limpar</span>
            <MdDeleteForever className="icon-clean" />
          </button>
        </form>
      </div>

      <div className="component-response">
        {dados && (
            <>
                <span className="data-list">{dados.cep}</span>
                <span className="data-list">{dados.logradouro}</span>
                <span className="data-list">{dados.bairro}</span>
                <span className="data-list">{dados.localidade}</span>
                <span className="data-list">{dados.uf}</span>
            </>
        )}
        
        {errorDataCep && (
            <span className="data-list error-data-cep">
                {errorDataCep}
            </span>
        )}
      </div>
    </div>
  );
}
