import React from 'react';
import {
  Timeline, 
  TimelineItem, 
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
} from '@mui/lab';
import './Content.scss';

const TimelineElement:React.FC = () => {
  const timelineItems: Item[] = [
    {
      date: "01/22",
      title: "Full Stack Developer - SALT",
      text: "Consultant for School of Applied Technology.",
    },
    {
      date: "09/21 - 12/21",
      title: "Full Stack JavaScript Program - SALT",
      text: "Intensive three month training program for full stack web development with a focus on TDD, mob programming, Agile and applied learning.",
    },
    {
      date: "10/19 - 10/20",
      title: "Diploma in Full Stack Web Development - Code Institute",
      text: "One year part-time program to learn the basics of HTML, CSS, JavaScript and Python.",
    },
    {
      date: "04/18 - 10/20",
      title: "Freelance Architect",
      text: "Designed small residential renovation projects for Portuguese clients.",
    },
    {
      date: "09/17 - 05/18",
      title: "Math and English Tutor - Pontos nos Is",
      text: "Tutored children aged between 10 and 16 in both Math and English, having increased their grades greatly by the end of the year.",
    },
    {
      date: "02/15 - 04/18",
      title: "Summer Camp Coordinator - Acude Aventura Radical",
      text: "During my time as a summer camp coordinator I have managed a team of 7 people and was responsible for 94 children. As well as co-coordinated and empowered a team with more than 20 people to work with 500 children on the same day.",
    },
    {
      date: "09/12 - 12/17",
      title: "Master in Architecture - University of Lisbon",
      text: "Bachelor + Master Degree in architecture with an emphasis in sustainability in construction and remodelations.",
    },
  ];

  return (
    <>
      <Timeline className="timeline" position="alternate">
        {timelineItems.map((item, i) => {
          return (
            <TimelineItem key={i}>
              <TimelineOppositeContent className="timeline-date">
                {item.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="timeline-dot"/>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timeline-info">
                {item.title}
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </>
  );
};

export default TimelineElement;
