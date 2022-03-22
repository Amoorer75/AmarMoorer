import React, { useState, useEffect } from "react";
import MultiProjects from "../componet/MultiProjects";
import data from '../projects/ProjectData.json'

export default function AboutPage(props){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data);
    }, []);
  
    console.log(projects);
  
    const renderPosts = () => {
      const { history } = props;
  
      console.log(history);
  
      return projects.map((project, index) => {
        return (
          <MultiProjects
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.thumbnail}
            history={history}
          />
        );
      });
    };
  
    return <div className="posts">{renderPosts()}</div>;
  }