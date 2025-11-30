import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h2 className="logo">PetSoft</h2>
        <nav>
            <link to="/">Home</link>
            <Link to="/servicos">Servicos</Link>
            <Link to="/clientes">Clientes</Link>
            <Link to="/agendamentos">Agendamentos</Link>
        </nav>
    </div>
  );
}

export default Sidebar