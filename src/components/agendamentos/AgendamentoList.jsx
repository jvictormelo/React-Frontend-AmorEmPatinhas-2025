import { useState, useEffect } from 'react';
import Agendamento from './Agendamento';

const AgendamentosList = () => {

    // Pega o cache do LocalStorage, caso não encontre recebe null
    const agendamentosCache = JSON.parse(localStorage.getItem('agendamentosCache'));

    // 1. Estados para guardar os dados, o status de carregamento e possíveis erros
    const [agendamentos, setAgendamentos] = useState(agendamentosCache ?? []);
    const [loading, setLoading] = useState(agendamentosCache ? false : true);
    const [error, setError] = useState(null);
    // 2. O useEffect para buscar os dados
    useEffect(() => {

        const controller = new AbortController();

        // Define função assíncrona para realizar a busca
        const fetchAgendamentos = async () => {
            try {
                                // A URL completa da nossa API, agora com o sinal do controller
                const response = await fetch('http://localhost:3000/api/agendamento', {
                    signal: controller.signal
                });

                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`);
                }
                const data = await response.json();
                setAgendamentos(data); // Guarda os dados no estado
                setError(null); // Limpa erros anteriores
                localStorage.setItem('agendamentosCache', JSON.stringify(data));
            } catch (err) {
                setError(err.message); // Guarda a mensagem de erro no estado
            } finally {
                setLoading(false); // Finaliza o carregamento, com sucesso ou erro
            }
        };
        fetchAgendamentos(); // Executa a função a primeira vez
        // A cada 5 segundos fetchAgendamentos() será chamada
        const interval5secs = setInterval(() => {
            fetchAgendamentos(); // Executa a função de tempos em tempos
        }, 5000);
        // 3. A função de limpeza do useEffect.
        //    Será chamada quando o componente for desmontado.
        return () => {
            controller.abort(); // Cancela a requisição fetch em andamento
            clearInterval(interval5secs);
        };


    }, []); // O array de dependências vazio
            // (chamado apenas quando o componente for renderizado pela primeira vez)

    // 4. Renderização condicional baseada nos estados
    if (loading) {
        return <p>Carregando agendamentos...</p>;
    }
    // 5. Renderização do componente
    return (
        <div>
            {error && <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <div class="toast text-bg-danger bg-opacity-50 show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <strong class="me-auto">Erro</strong>
                        <button
                            type="button"
                            class="btn-close"
                            aria-label="Close"
                            onClick={() => setError(null)}
                        >
                        </button>
                    </div>
                    <div class="toast-body">
                        {error}
                    </div>
                </div>
            </div>}
            <div>
                {agendamentos.map((agendamento) => (
                    <Agendamento key={agendamento.id} agendamento={agendamento} />
                ))}
            </div>
        </div>
    );
};

export default AgendamentosList
