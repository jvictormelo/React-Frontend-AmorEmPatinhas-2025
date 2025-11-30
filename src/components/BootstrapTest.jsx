import {Button,Card} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


const BootstrapTest = () => {
  return (
    <div>
        <button className="btn btn-primary">Azul</button>
         <Button variant="danger">Vermelho</Button>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://tse3.mm.bing.net/th/id/OIP.zfaxzqQPD2uX3XVnOp3D8gHaKv?pid=Api&P=0&h=180" />
      <Card.Body>
        <Card.Title>Lord of the rings</Card.Title>
        <Card.Text>
          Senhor dos aneis é muito bom, uma das melhores obras de Fantasia da história.
        </Card.Text>
        <Button variant="primary">Veja</Button>
      </Card.Body>
    </Card>
    
    
    </div>
    
    
   
  )
}

export default BootstrapTest