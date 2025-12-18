import React from 'react'
import AgendamentosList from '../../components/agendamentos/AgendamentoList';
import { Link } from 'react-router-dom';

const AgendamentosIndex = () => {
  return (
    <div>
        <Link to= "/agendamentos/create" className="btn btn-primary m-2"> Criar Agendamento </Link>
        <AgendamentosList />      

    </div>
    
  )
}

export default AgendamentosIndex