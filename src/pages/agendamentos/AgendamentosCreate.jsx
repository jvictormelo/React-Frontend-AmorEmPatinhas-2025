import React from 'react'
import { Link } from 'react-router-dom';
import AgendamentoFormCreate from '../../components/agendamentos/AgendamentoFormCreate';

const AgendamentosCreate = () => {
  return (
    <div>
        <Link to="/agendamentos" className='btn btn-secondary m-2'>Voltar</Link>
        <AgendamentoFormCreate/>
    </div>
  )
}

export default AgendamentosCreate