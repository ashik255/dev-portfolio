import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProjectDisplay from './ProjectDisplay';
import projectsData from "../data/Data.json";


const ProjectDetails = () => {
        const [projectDetail, setProjectDetail] = useState([]);
        useEffect(() =>{
            setProjectDetail(projectsData);
        }, [])
    return (
        <Container>
            <h1>This is project details</h1>

        {projectDetail.map((data) => {
          return <ProjectDisplay 
          key={data.id} data={data}></ProjectDisplay>;
        })}
        
       </Container>
    );
};

export default ProjectDetails;