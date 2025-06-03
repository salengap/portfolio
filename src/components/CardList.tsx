import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem"
import { Link } from "react-router"
import bortakvallimage from "../assets/img/bortakvall.png"
import starwarsimage from "../assets/img/starwars2.png"

const CardList = () => {
  return (
    <>
    <div className="cardRow">

        <ListGroupItem key="starwars">
            <Card className="resultListCard">
                <Card.Title className="cardTitle">Starwars Encyclopedia</Card.Title>
                <Card.Text className="cardText">Individual project</Card.Text>
                <Card.Img variant="top" src={starwarsimage} />
                <div className="cardBody">
                    <p className="cardText"> 
                        I built a Star Wars encyclopedia using React with TypeScript, 
                        React Router, and Axios, with full type coverage and URL-based 
                        pagination and search using URLSearchParams. All API communication 
                        is handled through a centralized service layer, and has error and loading handling. 
                        The project is deployed on Netlify.
                    </p>
                    <Link to={"https://starwar-encyclopedia-apelmo.netlify.app/"} className="btn btn-success" role="button" target="_blank">
                        View page
                    </Link>
                    <Link to={"https://github.com/the-hive-resistance/fed24-js2-uppgift-1-salengap/commits/main/"} className="btn github" target="_blank">
                        Github
                    </Link>
                </div>
            </Card>
        </ListGroupItem>
        <ListGroupItem key={"bortakvall"}>
            <Card className="resultListCard">
                <Card.Title className="cardTitle">Bortakväll</Card.Title>
                <Card.Text className="cardText">Group Project with Tilde Tarkiainen Ljungquist and Teddie Finström.</Card.Text>
                <Card.Img variant="top" src={bortakvallimage} />
                <div className="cardBody">
                    <p className="cardText">
                        We built a simple web shop using TypeScript, Vite, and modern JavaScript. 
                        The layout is responsive using CSS Flexbox/Grid, and all data is managed in JavaScript, 
                        not the DOM. We communicated with an external REST API through a separate module and published 
                        the project via Netlify.

                    <span className="newRow">
                        My responsibility was the shoppingcart and everything concerning adding candy 
                        to it and being able to use that data in the checkout.
                    </span>
                    </p>
                    <Link to={"https://bortakvallgrupp9.netlify.app/"} className="btn btn-success" role="button" target="_blank">
                        View page
                    </Link>
                    <Link to={"https://github.com/the-hive-resistance/fed24-js1-uppgift-2-fed24-js1-inlamningsuppgift-2-grupp-9"} className="btn github" target="_blank">
                        Github
                    </Link>
                </div>
            </Card>
        </ListGroupItem>
    </div>
    </>
  )
}

export default CardList