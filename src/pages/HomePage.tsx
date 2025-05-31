import { ListGroup } from "react-bootstrap"
import CardList from "../components/CardList"

const HomePage = () => {
  return (
    <>
    <h1>Sally Engström Apelmo</h1>
    <p>Graphic Designer and Frontend Developer.</p>
    <hr />

    <ListGroup>
        <CardList/>
    </ListGroup>
    
    </>
  )
}

export default HomePage