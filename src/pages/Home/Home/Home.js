import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Project from '../PortFolio/Project';


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
              <About></About>
              <Project></Project>
              <Contact></Contact>
              
        </div>
    );
};

export default Home;