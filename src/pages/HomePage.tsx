import { ListGroup } from "react-bootstrap"
import CardList from "../components/CardList"
import Navigation from "../components/Navigation"
import { Link } from "react-router"

const HomePage = () => {
  return (
    <> 
        <div className="homePageContainer">
            <div className="title">
                <div>
                    <Link to="/" id="titleLink">Sally Apelmo</Link>
                    <p>Frontend Developer and Graphic Designer.</p>
                </div>
                <Navigation
                page="homepage"
                />
            </div>


            <ListGroup>
                <CardList/>
            </ListGroup>

        </div>
    </>
  )
}

export default HomePage