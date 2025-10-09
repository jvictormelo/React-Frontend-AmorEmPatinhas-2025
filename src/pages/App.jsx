import Contador from "../components/Contador"
import Feed from "../components/Feed"
import Perfil from "../components/Perfil"
import Saudacao from "../components/Saudacao"
import NovoPost from "../components/NovoPost"
import FeedFiltravel from "../components/FeedFiltravel"
import BootstrapTest from "../components/BootstrapTest"


const CenterLayout = ({ children }) => (
    <div
        style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            boxSizing: "border-box"
        }}
    >
        {children}
    </div>
);
// src/App.jsx
const App = () => {
  return (
    <>
    <CenterLayout>
    <p>Olá, React!</p>
    <Perfil />
    <Saudacao nome="João Victor Melo" />
    <Contador />
    <Feed />
    <NovoPost />
    <FeedFiltravel/>
    <BootstrapTest />
    </CenterLayout>
    
    

    </>
  )
}
export default App
