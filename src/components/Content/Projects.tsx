import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';
import GameHub from '../../media/images/GameHub.png';
import TaskTracker from '../../media/images/TaskTracker.png';
import TodaysGoals from '../../media/images/TodaysGoals.png';
import Libris from '../../media/images/Libris.png';
import './Content.scss';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: "GameHub",
      website: "https://gamehub-client.herokuapp.com/",
      code: "https://github.com/MarianaPereira23/GameHub",
      image: GameHub
    },
    {
      name: "Task Tracker",
      website: "https://task-tracker-typescript.herokuapp.com/",
      code: "https://github.com/MarianaPereira23/ToDoApp-typescript",
      image: TaskTracker
    },
    {
      name: "Todays Goals",
      website: "https://mytodo-app-react.herokuapp.com/",
      code: "https://github.com/MarianaPereira23/ToDoApp",
      image: TodaysGoals
    },
    {
      name: "Libris",
      website: "https://libris-project.herokuapp.com/",
      code: "https://github.com/MarianaPereira23/libris",
      image: Libris
    },
  ];

  return (
    <div className="page-projects">
      <ul className="projects-list">
        {projects.map((project, i) => {
          return (
            <li className="list-project" key={i}>
              <img className="project-image" src={project.image} alt={project.name} />
              <h3 className="project-title">{project.name}</h3>
              <div className="project-link__container">
                <a className="project-link" href={project.code} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode}/></a>
                <a className="project-link" href={project.website} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDesktop}/></a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
