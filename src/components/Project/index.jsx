import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { projet } from '../../data/projet';
import './index.css';

export const Project = () => {

  const { projectSlug } = useParams();
  const [currentProject, setCurrentProject] = useState(undefined)
  
  useEffect(() => {
    const foundBook = projet.find((projet) => projet.slug === projectSlug);
    setCurrentProject(foundBook);
  }, [projectSlug])

    if(currentProject === undefined) {
      return <div className="error">Il n'y a pas de projet</div>
    }
  return (
    <div className="project">
      <h1>{currentProject.title}</h1>
      <h3>{currentProject.author}</h3>
      <p>{currentProject.description}</p>
    </div>
  )
}
