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
                            <Button href='https://3sumjx5jr3.us-east-1.awsapprunner.com/'
                                className="button"
                                variant="primary">Go somewhere</Button>
                        </div>
                    </Card.Body>
                </Card>


                <Card className='card-two'>
                    <Card.Img className='photo' variant="top" src={Com} />
                    <Card.Body>
                        <Card.Title>Non-Profit Website</Card.Title>
                        <Card.Text>
                            The Rondel Clark Foundation is fighting against extreme weight cutting practices in
                            combat sports and we are also dedicated to educate the community on the dangers of extreme..
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
                        <Button
                            href='https://ai-wizardry.vercel.app/'
                            className="button"
                            variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        </section>
    );
}

export default ProjectGrid;