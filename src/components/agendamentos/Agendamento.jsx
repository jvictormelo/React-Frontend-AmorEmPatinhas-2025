import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Agendamento = ({ agendamento }) => {

  const handleEstadoChange = async () => {
    // Lógica para atualizar o estado do agendamento
    const response = await fetch(`http://localhost:3000/api/agendamento/${agendamento.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ estado: agendamento.estado === "a" ? "f" : "a" }), // Envia apenas o campo a ser alterado
            });

  }
  const handleDelete = async () => {
     const response = await fetch(`http://localhost:3000/api/agendamento/${agendamento.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
          }


  const dataFormatada = new Date(agendamento.data_agendamento)
    .toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

  return (
    <Card className="m-2 shadow-sm border-light rounded-3">

      <Card.Header className="fw-bold">
        Agendamento #{agendamento.id} • Usuário - {agendamento.usuario_nome}
      </Card.Header>

      <Card.Body className="d-flex align-items-center gap-3">

        {agendamento.url_imagem && (
          <img
            width={60}
            height={60}
            className="rounded-circle border shadow-sm"
            src={agendamento.url_imagem}
            onError={e => (e.currentTarget.src = "/img/error.png")}
          />
        )}

        <div>
          <p className="mb-1">{agendamento.texto}</p>
          <small className="text-muted">{dataFormatada}</small>
        </div>

      </Card.Body>

      <Card.Footer className="d-flex justify-content-between">

        {agendamento.estado === "a" && 
          <button className="btn btn-success" onClick={handleEstadoChange}>Concluído</button>}

        {agendamento.estado === "f" && 
          <button className="btn btn-warning " onClick={handleEstadoChange} >Pendente</button>}

        <div>
          <Button variant="info" size="sm" className="mx-1 text-white">
            Editar
          </Button>
          <Button variant="danger" size="sm" onClick={handleDelete} >
            Remover
          </Button>
        </div>

      </Card.Footer>

    </Card>
  );
};

export default Agendamento;
