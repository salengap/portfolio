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
                                <Card.Body className="cardBody">
                                    <Card.Title className="cardTitle">{"Bortakväll"}</Card.Title>
                                    <Card.Text className="cardText">
                                    <p>
                                        Group Project with Tilde Tarkiainen Ljungquist and Teddie Finström.
                                    </p>
                                    <p>
                                        We built a simple web shop using TypeScript, Vite, and modern JavaScript. 
                                        The layout is responsive using CSS Flexbox/Grid, and all data is managed in JavaScript, 
                                        not the DOM. We communicated with an external REST API through a separate module and published 
                                        the project via Netlify.
                                    </p>
                                    <p>
                                        My responsibility was the shoppingcart and everything concerning adding candy 
                                        to it and being able to use that data in the checkout.
                                    </p>
                                    </Card.Text>
                                    <Link to={"https://bortakvallgrupp9.netlify.app/"} className="btn btn-success" role="button" target="_blank">
                                        View page
                                    </Link>
                                </Card.Body>
                            </Card>

                            <Card className="resultListCard" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={starwarsimage} />
                                <Card.Body className="cardBody">
                                    <Card.Title className="cardTitle">{"Starwars Encyclopedia"}</Card.Title>
                                    <Card.Text className="cardText">
                                        <p>
                                            Individual project
                                        </p>
                                        <p>
                                        We built a Star Wars encyclopedia using React with TypeScript, 
                                        React Router, and Axios, with full type coverage and URL-based 
                                        pagination and search using URLSearchParams. All API communication 
                                        is handled through a centralized service layer, and has error and loading handling. 
                                        The project is deployed on Netlify.
                                        </p>
                                    </Card.Text>
                                    <Link to={"https://starwar-encyclopedia-apelmo.netlify.app/"} className="btn btn-success" role="button" target="_blank">
                                        View page
                                    </Link>
                                </Card.Body>
                            </Card>
                        </ListGroupItem>
                </div>
    </>
  )
}

export default CardList