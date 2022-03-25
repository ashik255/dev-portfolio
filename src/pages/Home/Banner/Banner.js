import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import './Banner.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Aos from 'aos';
import TypeAnimation from 'react-type-animation';

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <Container className='banner mx-auto d-flex justify-content-center align-items-center' fluid>
            <Row className='' >
                <Col md={12} className='my-3' style={{ color: '#e3f2fd' }}>
                    <TypeAnimation
                        cursor={true}
                        sequence={['I Am Ariful Islam.', 2000,
                            'I Am Full-Stack Developer.', 2000
                        ]}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                    <a href="https://drive.google.com/drive/u/0/folders/1C4z_QCo_4vtUsOzn-BEeZaah7YwUUySS" target="_blank" rel="noreferrer"><Button  style={{ backgroundColor: '#263238' }} className='border-radius px-4 py-2 mx-3 '>My Resume</Button></a>
                </Col>

                <Col md={12} className='mx-2 my-3' >
                    <a style={{ color: '#e3f2fd' }} className='me-3' href="https://www.facebook.com/profile.php?id=100005932126378" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faFacebook} /></a>
                    <a style={{ color: '#e3f2fd' }} className='me-3' href="https://twitter.com/HEADPHO08231110" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faTwitter} /></a>
                    <a style={{ color: '#e3f2fd' }} className='me-3' href="https://www.linkedin.com/in/md-ariful-islam-a53496205/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faLinkedin} /></a>
                    <a style={{ color: '#e3f2fd' }} href="https://www.instagram.com/mai_ashik/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faInstagramSquare} /></a>
                </Col>
            </Row>
        </Container>

        //     <Row className='d-flex bg-light  banner justify-content-center align-items-center'>
        //     {/* <h1 style={{color:'red'}}> WELCOME..</h1> */}
        //     <Col style={{color:'white'}} className='light'>
        //         <TypeAnimation
        //             cursor={true}
        //             sequence={['I Am Ariful Islam.', 2000,
        //              'I Am Full-Stack Developer.',2000
        //             ]}
        //             wrapper="h2"
        //             repeat={Infinity}
        //         />
        //          <a href="https://drive.google.com/drive/u/0/folders/1C4z_QCo_4vtUsOzn-BEeZaah7YwUUySS" target="_blank" rel="noreferrer"><Button  className='border-radius mx-3 '>My Resume</Button></a>
        //         </Col>




        //     <Col className='icon-design pl-3' data-aos="fade-up">
        //         <a className='' href="https://www.facebook.com/profile.php?id=100005932126378" target="_blank" rel="noreferrer"><FontAwesomeIcon  icon={faFacebook} /></a>
        //         <a href="https://twitter.com/HEADPHO08231110" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        //         <a href="https://www.linkedin.com/in/md-ariful-islam-a53496205/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        //         <a href="https://www.instagram.com/mai_ashik/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} /></a>
        //     </Col>
        // </Row>
    );
};

export default Banner;