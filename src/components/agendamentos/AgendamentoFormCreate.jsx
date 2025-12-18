import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const AgendamentoFormCreate = () => {
    const [Usuarios_id, setUsuariosId] = useState('1');
    const [texto, setTexto] = useState('');
    const [estado, setEstado] = useState('');
    // Estado para armazenar o arquivo de imagem selecionado (File) para envio via multipart/form-data.
    const [imagem, setImagem] = useState(null);
    const [data_agendamento, setDataAgendamento] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Constrói o corpo multipart/form-data para enviar campos + arquivo (imagem).
        const fd = new FormData();
        fd.append('Usuarios_id', Usuarios_id); // Atributo: valor do estado "Usuarios_id"
        fd.append('texto', texto);             // Atributo: valor do estado "texto"
        fd.append('estado', estado);           // Atributo: valor do estado "estado"
        if (imagem) {
            fd.append('imagem', imagem);       // Atributo de arquivo: campo "imagem" esperado pelo backend
        }
        fd.append('data_agendamento', data_agendamento); // Atributo: valor do estado "data_agendamento"

        try {
            const response = await fetch('http://localhost:3000/api/agendamento', {
                method: 'POST',
                body: fd
            });

            if (!response.ok) {
                // Tenta ler o corpo da resposta como JSON para obter detalhes do erro da API.
                const errorData = await response.json().catch(() => null);

                // Constrói uma mensagem de erro detalhada.
                const errorMessage = errorData?.erro ?
                    `Erro HTTP: STATUS ${response.status} ${errorData?.erro} ${response.statusText}` :
                    `Erro HTTP: STATUS ${response.status} ${response.statusText}`;

                // Lança um erro para ser capturado pelo bloco catch.
                throw new Error(errorMessage);

            }
            alert('Agendamento criado com sucesso!');
            navigate("/agendamentos");
        } catch (error) {
            console.error(error);
            setError(error.message);
        }

    }

    return (
        <form onSubmit={handleSubmit} className='m-2' encType="multipart/form-data">
            {/* Renderização condicional do Toast de erro.
              Exibe um toast (usando classes de estilo Bootstrap) se houver um erro no estado.
            */}
            {error && <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <div class="toast text-bg-danger bg-opacity-50 show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <strong class="me-auto">Erro</strong>
                        {/* Botão para fechar o toast de erro, limpando o estado `error`. */}
                        <button
                            type="button"
                            class="btn-close"
                            aria-label="Close"
                            onClick={() => setError(null)}
                        >
                        </button>
                    </div>
                    <div class="toast-body">
                        {error} {/* Exibe a mensagem de erro */}
                    </div>
                </div>
            </div>}

            <div className='my-2'>
                <label className='form-label' htmlFor="id-input-Usuarios_id">Usuarios_id</label>
                <input className='form-control' type="number" id="id-input-Usuarios_id" value={Usuarios_id} onChange={(e) => setUsuariosId(e.target.value)} />
            </div>
            <div className='my-2'>
                <label className='form-label' htmlFor="id-input-texto">texto</label>
                <input className='form-control' type="text" id="id-input-texto" value={texto} onChange={(e) => setTexto(e.target.value)} />
            </div>
            <div className='my-2'>
                <label className='form-label' htmlFor="id-input-estado">estado</label>
                {/* <input className='form-control' type="text" id="id-input-estado" value={estado} onChange={(e) => setEstado(e.target.value)} /> */}
                <select className='form-select' value={estado} onChange={(e) => setEstado(e.target.value)}>
                    <option value="a">Concluido</option>
                    <option value="f">Pendente</option>
                </select>
            </div>
            <div className='my-2'>
                <label className='form-label' htmlFor="id-input-imagem">imagem</label>
                <input className='form-control' type="file" id="id-input-imagem" accept="image/*" onChange={(e) => setImagem(e.target.files?.[0] ?? null)} />
            </div>
            <div className='my-2'>
                <label className='form-label' htmlFor="id-input-data_agendamento">data_agendamento</label>
                <input className='form-control' type="datetime-local" id="id-input-data_agendamento" value={data_agendamento} onChange={(e) => setDataAgendamento(e.target.value)} />
            </div>
            <div className='my-2'>
                <button type='submit' className='btn btn-primary'>Enviar</button>
            </div>


        </form>
    )
}

export default AgendamentoFormCreate