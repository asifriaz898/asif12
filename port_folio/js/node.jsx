import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
    return (
        <section className="py-5 bg-light text-dark" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <Image
                            src="https://via.placeholder.com/400x400"
                            roundedCircle
                            fluid
                            alt="Profile"
                        />
                    </Col>
                    <Col md={6}>
                        <h2 className="mb-4">About Me</h2>
                        <p>
                            Hello! I'm <strong>Your Name</strong>, a passionate fullstack developer with expertise in
                            React, Node.js, and modern web technologies. I specialize in building fast,
                            responsive, and user-friendly web applications.
                        </p>
                        <p>
                            With a background in [Your Education or Field], I love combining design with functionality
                            to create impactful digital experiences.
                        </p>
                        <p>
                            When I'm not coding, you'll find me attending tech meetups, exploring new tools, or
                            contributing to open-source projects.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
