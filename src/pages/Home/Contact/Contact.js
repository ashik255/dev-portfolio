import React from 'react';
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail','template_jka4yt8', e.target,'user_bwjw0N5PWcjCfK7zQpxF4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div id="contact" className="d-flex justify-content-center" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* <svg data-aos="fade-right" style={{position:'absolute',zIndex:'-1',top:'0',height:'100%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 320"><path fill="#252934" fill-opacity="1" d="M0,33L1440,145L1440,320L0,320Z"></path></svg>
            <svg data-aos="fade-left" style={{position:'absolute',zIndex:'-1',top:'0',height:'100%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 320"><path fill="#252934" fill-opacity="1" d="M0,87L1440,0L1440,320L0,320Z"></path></svg> */}
            <Form onSubmit={sendEmail} className="p-5" style={{ width: "800px" }}>
                <h3 className="text-center mb-5">Contact Me</h3>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Name" name="name" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="subject" placeholder="Subject" name="subject" />
                    </Form.Group>
                </Row>
                <FloatingLabel controlId="floatingTextarea2" label="Your Message">
                    <Form.Control
                        name="message"
                        as="textarea"
                        placeholder="Your Message"
                        style={{ height: "100px" }}
                    />
                </FloatingLabel>
                <div className="d-flex justify-content-center">
                    <Button
                        className="primary-color border-0 mt-3"
                        variant="primary"
                        type="submit"
                    >
                        Send message
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Contact;