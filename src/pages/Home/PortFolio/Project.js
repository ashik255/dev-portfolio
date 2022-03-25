import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import Aos from "aos";
import ProjectCard from './ProjectCard';
import image1 from '../../../images/image1.png';
import image2 from '../../../images/image2.png';
import image3 from '../../../images/image3.png';

const project = [
  {
      name: 'Honda CRB',
      img: image1,
      github: '',
      details:'',
      liveSite: 'https://boring-pasteur-e751a5.netlify.app/',
      dataAos:'fade-right'
      
  },
  {
      name: 'Geneius Car Parking',
      img: image2,
      details:'',
      github: 'https://github.com/ashik255/Genius-Car-Mechanics',
      liveSite: 'https://genius-car-mechanics-5c7ce.web.app/',
      dataAos:'fade-up'
  },
 
  {
      name: 'Car Selling',
     img: image3,
      details:'',
      github: 'https://github.com/ashik255/car-selling-client ',
      liveSite: 'https://car-selling-ef9d9.web.app/',
      dataAos:'fade-right'
  },
  // {
  //     name: 'Soccer Auction',
  //     thumbnail: '',
  //     image1: '',
  //     image2: '',
  //     gitLink: '',
  //     liveLink: '',
  //     description: '',
  //     dataAos:'fade-left'
  // }
]



const Project = () => {
    // const [project, setproject] = useState([]);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  useEffect(() => {
		Aos.init({ duration: 1000 });
	}, [])
    return (
        <div id='portfolio'>
            <Container name="projects" data-aos="fade-up"
    data-aos-offset="100" className="pt-5">
      <h1 className="text-center my-5">Projects</h1>

      <Slider {...settings}>
          
        {project.map((data) => {
          return (
              <ProjectCard 
            key={data.id} data={data} className={settings.className}/>
          );
        })}
        </Slider>
    </Container>
        </div>
    );
};

export default Project;