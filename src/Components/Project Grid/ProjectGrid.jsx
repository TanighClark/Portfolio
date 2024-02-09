import React from 'react';
import './ProjectGrid.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../CommonStyles/CommonStyles.css'
import Com from '../Assets/commerce.png'
import earth from '../Assets/earth.png'
import book from '../Assets/book.png'



const ProjectGrid = () => {
    return (
        <section className='projectGrid'>
            <h3>My work</h3>
            <div className="d-flex justify-content-around flex">




                <Card className='card-two'>
                    <Card.Img className='photo' variant="top" src={earth} />
                    <Card.Body>
                        <Card.Title>Premium Air</Card.Title>
                        <Card.Text>
                            Premium Air website is a satirical and humorous take on a fictional company that sells "cosmically sourced"
                            air for vehicle tires.
                        </Card.Text>
                        <Button
                            href='https://premium-air.vercel.app/'
                            className="button"
                            variant="primary">Go to Site</Button>
                    </Card.Body>
                </Card>


                <Card className='card-three'>
                    <Card.Img className='photo' variant="top" src={book} />
                    <Card.Body>
                        <Card.Title>AI Wizardry</Card.Title>
                        <Card.Text>

                            AI Wizardry is a pioneering online platform that empowers users to create their own personalized
                            children's books with the aid of advanced artificial intelligence technologies.
                        </Card.Text>
                        <Button
                            href='https://ai-wizardry.vercel.app/'
                            className="button"
                            variant="primary">Go to Site</Button>
                    </Card.Body>
                </Card>

                <Card className='card'>
                    <Card.Img className='photo' variant="top" src={Com} />
                    <Card.Body className='card-body'>
                        <Card.Title>E-Commerce Website</Card.Title>
                        <Card.Text>
                            A responsive e-commerce website showcasing my expertise in JavaScript,
                            React, Bootstrap, React CSS, and HTML. This project encompasses a feature-rich
                            simulated online shopping experience.
                        </Card.Text>
                        <div className='position'>
                            <Button href='https://3sumjx5jr3.us-east-1.awsapprunner.com/'
                                className="button"
                                variant="primary">Go to Site</Button>
                        </div>
                    </Card.Body>
                </Card>

            </div>

        </section>
    );
}

export default ProjectGrid;