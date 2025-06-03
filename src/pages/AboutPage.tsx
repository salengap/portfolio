import { Link } from "react-router"
import Navigation from "../components/Navigation"
import { Button } from "react-bootstrap"

const AboutPage = () => {
    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };
    
  return (
    <>

        
        <div className="title">
            <div>
                <Link to="/" id="titleLink">Sally Apelmo</Link>
                <p>Frontend Developer and Graphic Designer.</p>
            </div>
            <Navigation
            page="about"
            />
        </div>
        
        <div className="about">
            <h1>Contact me!</h1>

            <p>sally.apelmo@gmail.com</p>

            <div className="skills">
                <h2>Skills</h2>

                <p className="aboutTitle">Frontend: HTML, CSS, Javascript, Typescript, React</p>
                <p className="aboutTitle">Backend: Node.js, Prisma, Socket.IO, MongoDB, MySQL, authentication with JWT and Basic Auth</p>
                <p className="aboutTitle">Other: Adobe Illustrator, InDesign, Photoshop, After Effects, Premiere Pro, Bridge, Microsoft Office Suite</p>
            </div>

            <div className="education">
                <h2>Education</h2>

                <p className="aboutTitle">Front End Developer – Yrkeshögskola – Medieinstitutet, Malmö (2024 - 2026)</p>
                <p className="aboutText">
                    The program has primarily given me solid knowledge in JavaScript,
                    TypeScript and React, but also covered API development, web design, and testing. I’ve
                    gained both a broad and in-depth understanding of the field and have worked
                    extensively with hands-on, practical projects.
                </p>
                <p className="aboutTitle">Graphic Design and Illustration – Bachelor’s Degree – Konstfack University of Arts, Crafts and Design, Stockholm (2020 - 2023)</p>
                <p className="aboutText">
                    This program taught me to work conceptually within a creative design process
                    and how to manage a project from start to finish. I also had the opportunity to
                    explore basic programming.
                </p>
            </div>

            <div className="workexperience">
                <h2>Work experience - a selection</h2>

                <p className="aboutTitle">Hornbach - Frame Workshop & Decoration Department, Arlöv (2023 - 2024)</p>
                <p className="aboutText">
                    At Hornbach, I worked mainly with custom framing – from meeting the customer
                    and ordering materials to completing the framing itself. I also advised customers
                    on interior design, both private individuals and professionals in the construction
                    industry.
                </p>

                <p className="aboutTitle">Liljevalchs - Exhibition Host, Stockholm (2021 - 2023)</p>
                <p className="aboutText">
                    As an exhibition host, I was the visitors’ first point of contact. I guided and
                    inspired them through the exhibitions, helping create a welcoming and engaging
                    experience.
                </p>

                <p className="aboutTitle">Elderly Home Care in Kirseberg, Malmö (summers of 2021, 2020, and 2019)</p>
                <p className="aboutText">
                    This role involved supporting individuals with a variety of needs in their daily
                    routines. The job was highly social and helped me develop strong listening skills
                    and clear communication to best support each person individually.
                </p>
            </div>

            <div className="selectedclients">
                <h2>Selected Design Clients</h2>

                <p className="aboutTitle">Krognoshuset</p>
                <p className="aboutTitle">C-print</p>
                <p className="aboutTitle">Konstfack</p>
                <p className="aboutTitle">AMF-fastigheter</p>
                <p className="aboutTitle">Malmö Sinfonietta</p>
            </div>

            <Button 
                onClick={() => scrollToTop()}
                id="backToTopBtn"
                >
                    Back to Top
            </Button>
        </div>



    </>
  )
}

export default AboutPage