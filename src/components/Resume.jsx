//Este componente mostrará la página de currículum del portfolio en la que se mostrará la experiencia laboral y educativa del desarrollador.

// Usando map, recorremos los arrays y mostramos la información de cada proyecto, experiencia laboral y educación.

import { studies, experiences } from '../data/Resume';
import './App.css';

function Resume(){
    return(
        <>
            <h1>Curriculum</h1>
            <div className='divStudies'>
                <h2>Formación</h2>
                <ul>
                    {studies.map((study)=>(
                        <li>
                            <h3>{study.title}</h3>
                            <p>{study.institution}</p>
                            <p>{study.date}</p>
                        </li>
                    )
                    )}
                </ul>
            </div>
            <div className='divExperience'>
                <h2>Experiencia Laboral</h2>
                <ul>
                    {experiences.map((experience)=>(
                        <li>
                            <h3>{experience.title}</h3>
                            <p>{experience.company}</p>
                            <p>{experience.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Resume;