//Este componente mostrará la página de proyectos del portfolio.Se mostrarán los proyectos en los que ha trabajado el desarrollador. 

// Usando map, recorremos los arrays y mostramos la información de cada proyecto, experiencia laboral y educación.

import projects from '../data/Projects';
import './App.css';

function Projects() {
    return (
      <>
      <div className='divProjects'>
        <ul>
          {projects.map((project) => (
            <li>
              <h2>Proyecto:  {project.name}</h2>
              <img src={project.image}  alt='imagen del proyecto' />
              <p>Descripción: {project.description} </p>
              <a href={project.url} target="_blank">Pincha aquí para ver el proyecto.</a>
            </li>
          ))}
        </ul>
      </div>
      </>
    );
};

export default Projects;