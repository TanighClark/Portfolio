import React from 'react';
import './ProjectGrid.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../CommonStyles/CommonStyles.css'
import Com from '../Assets/commerce.png'



const ProjectGrid = () => {
    return (
        <section className='projectGrid'>
            <h3>My work</h3>
            <div className="d-flex justify-content-around flex">

                <Card className='card'>
                    <Card.Img className='photo' variant="top" src={Com} />
                    <Card.Body className='card-body'>
                        <Card.Title>E-Commerce Website</Card.Title>
                        <Card.Text>
                            A responsive e-commerce website showcasing my expertise in JavaScript,
                            React, Bootstrap, React CSS, and HTML. This project encompasses a feature-rich
                            simulated online shopping experience, demonstrating my proficiency in front-end
                            development. E-Commerce website has a responsive layout to match any sized device
                            used in todays modern world.
                        </Card.Text>
                        <div className='position'>
                            <Button className="button" variant="primary">Go somewhere</Button>
                        </div>
                    </Card.Body>
                </Card>


                <Card className='card-two'>
                    <Card.Img className='photo' variant="top" src={Com} />
                    <Card.Body>
                        <Card.Title>Mock Netflix Account</Card.Title>
                        <Card.Text>
                            The mock account features a user-friendly login system, reminiscent of Netflix's
                            secure authentication process. Within the account, I've meticulously replicated the
                            browsing experience, allowing users to explore a curated selection of 'movies' and 'TV shows,'
                            showcasing my attention to detail in mimicking real-world functionalities.
                        </Card.Text>
                        <Button className="button" variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>


                <Card className='card-three'>
                    <Card.Img className='photo' variant="top" src={Com} />
                    <Card.Body>
                        <Card.Title>AI Generator</Card.Title>
                        <Card.Text>

                            This comprehensive toolset encompasses a spectrum of capabilities, including text-to-picture generation,
                            transforming textual input into vibrant and expressive visual representations. Leveraging cutting-edge AI models,
                            it converts text into captivating images, offering a creative and novel way to visualize ideas and concepts.
                        </Card.Text>
                        <Button className="button" variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        </section>
    );
}

export default ProjectGrid;