import { useState } from "react";
const Filtro = ({ termo, onChange }) => {
    return (
        <input
            placeholder="Filtrar por Conteúdo e por autor ..."
            value={termo}
            onChange={e => onChange(e.target.value)}
        />
    )
}
const Lista = ({ items, termo }) => {
    const t = termo.trim().toLowerCase();
    const filtro = items.filter(post => !t || post.texto.toLowerCase().includes(t) ||
        post.autor.toLowerCase().includes(t)
    );
    return filtro.map(p => <div key={p.id}>{p.autor}: {p.texto}</div>);
}
const FeedFiltravel = () => {
    const [termo, setTermo] = useState("");
    const posts = [
        { id: 1, autor: "Ana", texto: "JSX ❤️" },
        { id: 2, autor: "Leo", texto: "Hooks são poderosos" },
        { id: 3, autor: "Pietra", texto: "O Victor sabe muiot" },
        { id: 4, autor: "Tanaka", texto: "niku niku" },
    ];
    return (
        <>
            <Filtro termo={termo} onChange={setTermo} />
            <Lista items={posts} termo={termo} />
        </>
    )
}
export default FeedFiltravel
