import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="text-white bg-dark">
            <div className="container py-4 py-lg-5">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                        <h3 className="fs-6 text-white">Projects</h3>
                        <ul className="list-unstyled">
                            <li><a className="link-light" href="https://tanighclark.vercel.app/Pages/Portfolio">Projects Page</a></li>
                            <li><a className="link-light" href="https://premium-air.vercel.app/">Most Popular</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                        <h3 className="fs-6 text-white">About</h3>
                        <ul className="list-unstyled">
                            <li><a className="link-light" href="https://tanighclark.vercel.app/Pages/About">About Me</a></li>
                            <li><a className="link-light" href="https://tanighclark.vercel.app/Pages/Contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                        <h3 className="fs-6 text-white">Social Media</h3>
                        <ul className="list-unstyled">
                            <li><a href="https://github.com/TanighClark">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/tanigh-clark/">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last item social">
                        <div className="fw-bold d-flex align-items-center mb-2">
                            <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center bs-icon me-2">
                                {/* SVG content */}
                            </span>
                            <span>Brand</span>
                        </div>
                        <p className="text-muted copyright">
                            <span style={{ backgroundColor: 'rgb(29, 31, 33)', color: 'rgb(221, 221, 221)' }}> This website serves as a portfolio demonstrating my work and skills to prospective employers. </span>
                        </p>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center pt-3">
                    <p className="mb-0">Copyright © 2023 Tanigh Clark</p>
                    <ul className="list-inline mb-0">
                        {/* SVG icons */}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
