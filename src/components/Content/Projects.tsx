import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHtml5, faCss3Alt, faReact, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
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
      tech: "JavaScript MongoDB PostgreSQL Express NodeJS React Redux",
      website: "https://gamehub-client.herokuapp.com/",
      code: "https://github.com/MarianaPereira23/GameHub",
      image: GameHub
    },
    {
      name: "Task Tracker",
      tech: "TypeScript Socket.io NodeJS React CSS HTML",
      website: "https://task-tracker-typescript.herokuapp.com/",
      code: "https://github.com/MarianaPereira23/ToDoApp-typescript",
      image: TaskTracker
    },
    {
      name: "Todays Goals",
      tech: "React Redux JavaScript CSS HTML",
      website: "https://mytodo-app-react.herokuapp.com/",
      code: "https://github.com/MarianaPereira23/ToDoApp",
      image: TodaysGoals
    },
    {
      name: "Libris",
      tech: "Python MongoDB JavaScript CSS HTML",
      website: "https://libris-project.herokuapp.com/",
      code: "https://github.com/MarianaPereira23/libris",
      image: Libris
    },
  ];

  const render = (arr: Project[]) => {
    const result = [];
    for(let i = 0; i < arr.length; i += 2){
      result.push(
        <>
          <div className="projects-list_left">
            <img className="project-image" src={arr[i].image} alt={arr[i].name} />
            { arr[i + 1] && 
              <div className="project-info">
                <h2 className="project-title">{arr[i + 1].name}</h2>
                <p className="project-tech">{arr[i + 1].tech}</p>
                <div className="project-link__container">
                  <a className="project-link" href={arr[i + 1].code} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode}/></a>
                  <a className="project-link" href={arr[i + 1].website} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDesktop}/></a>
                </div>
              </div>
            }
          </div>
          <div className="projects-list_right">
            <div className="project-info">
              <h2 className="project-title">{arr[i].name}</h2>
              <p className="project-tech">{arr[i + 1].tech}</p>
              <div className="project-link__container">
                <a className="project-link" href={arr[i].code} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode}/></a>
                <a className="project-link" href={arr[i].website} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDesktop}/></a>
              </div>
            </div>
            { arr[i + 1] && 
            <img className="project-image" src={arr[i + 1].image} alt={arr[i].name} />
            }
          </div>
        </>
      );
    }
    return result;
  };

  return (
    <div className="page-projects">
      {render(projects)}
    </div>
  );
};

export default Projects;
