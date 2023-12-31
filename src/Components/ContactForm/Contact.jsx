import React, { useState } from 'react';
import './Contact.css';
import '../CommonStyles/CommonStyles.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

function Contactt() {
    const [emailSent, setEmailSent] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "1978d91e-46cd-4804-b041-0386b6c22605");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setEmailSent(true);
        }
    };

    const handleClose = () => {
        setEmailSent(false);
    };

    return (
        <section className="full-height px-lg-5 contact">
            <div className="contain">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 pb-4">
                        <h1>Interested in working together? Let's talk</h1>
                    </div>
                    <div className="col-lg-8">
                        <form onSubmit={onSubmit} className="row g-lg-3 gy-3 form">
                            <div className="form-group col-12">
                                <input type="text" name="name" className="form-control" placeholder="Enter your full name" required />
                            </div>
                            
                            <div className="form-group col-12">
                                <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group col-12">
                                <input type="text" name='subject' className="form-control" placeholder="Enter subject" />
                            </div>
                            <div className="form-group col-12">
                                <textarea name="message" rows={4} className="form-control" placeholder="Enter your message" defaultValue={""} />
                            </div>
                            <div className="form-group col-12">
                                <button type="submit" className="but">Contact me</button>
                            </div>
                            <div className="form-group col-12">
                                <button><a href="Assets/resume.PDF" download className="but">Download CV</a></button>
                            </div>
                        </form>
                        <Modal show={emailSent} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Email Sent</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Email sent successfully!</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={handleClose}>Close</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contactt;
