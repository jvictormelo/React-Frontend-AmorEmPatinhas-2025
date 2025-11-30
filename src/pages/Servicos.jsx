import { useEffect, useState } from "react";
import { api } from "../api";

export default function Servicos() {
  const [servicos, setServicos] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  async function carregar() {
    const res = await api.get("/servicos");
    setServicos(res.data);
  }

  async function adicionar() {
    await api.post("/servicos", { descricao, preco });
    setDescricao("");
    setPreco("");
    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div>
      <h1>Serviços</h1>

      <input placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
      <input placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} />

      <button onClick={adicionar}>Cadastrar</button>

      <ul>
        {servicos.map(s => (
          <li key={s.id}>
            {s.descricao} — R$ {s.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}
