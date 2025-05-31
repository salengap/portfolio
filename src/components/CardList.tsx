import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem"
import { Link } from "react-router"
import bortakvallimage from "../assets/img/bortakvall.png"
import starwarsimage from "../assets/img/starwars2.png"

const CardList = () => {
  return (
    <>
    <div className="cardRow">
                        <ListGroupItem key={"bortakvall"}>
                            <Card className="resultListCard" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={bortakvallimage} />
                                <Card.Body>
                                    <Card.Title>{"Bortakväll"}</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                    <Link to={"https://bortakvallgrupp9.netlify.app/"} className="btn btn-success" role="button" target="_blank">
                                        View more
                                    </Link>
                                </Card.Body>
                            </Card>

                            <Card className="resultListCard" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={starwarsimage} />
                                <Card.Body>
                                    <Card.Title>{"Starwars Encyclopedia"}</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                    <Link to={"https://starwar-encyclopedia-apelmo.netlify.app/"} className="btn btn-success" role="button" target="_blank">
                                        View more
                                    </Link>
                                </Card.Body>
                            </Card>
                        </ListGroupItem>
                </div>
    </>
  )
}

export default CardList