import React from 'react';
import './Content.scss';

const Timeline:React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      title: "January 2022 - present day",
      contentTitle: "Full Stack Developer - SALT",
      contentText: "",
      contentDetailedText: "Consultant for School of Applied Technology.",
    },
    {
      title: "September 2021 - December 2021",
      contentTitle: "Full Stack JavaScript Program - SALT",
      contentText: "",
      contentDetailedText: "Intensive three month training program for full stack web development with a focus on TDD, mob programming, Agile and applied learning.",
    },
    {
      title: "October 2019 - October 2020",
      contentTitle: "Diploma in Full Stack Web Development - Code Institute",
      contentText: "",
      contentDetailedText: "One year part-time program to learn the basics of HTML, CSS, JavaScript and Python.",
    },
    {
      title: "April 2018 - October 2020",
      contentTitle: "Freelance Architect",
      contentText: "",
      contentDetailedText: "Designed small residential renovation projects for Portuguese clients.",
    },
    {
      title: "September 2017 - May 2018",
      contentTitle: "Math and English Tutor – Pontos nos Is",
      contentText: "",
      contentDetailedText: "Tutored children aged between 10 and 16 in both Math and English, having increased their grades greatly by the end of the year.",
    },
    {
      title: "September 2015 - December 2017",
      contentTitle: "Master in Architecture – University of Lisbon",
      contentText: "",
      contentDetailedText: "Master Degree in architecture with an emphasis in sustainability in construction and remodelations.",
    },
    {
      title: "February 2015 - April 2018",
      contentTitle: "Summer Camp Coordinator – Acude Aventura Radical",
      contentText: "",
      contentDetailedText: "During my time as a summer camp coordinator I have managed a team of 7 people and was responsible for 94 children. As well as co-coordinated and empowered a team with more than 20 people to work with 500 children on the same day.",
    },
    {
      title: "September 2012 - June 2015",
      contentTitle: "Bachelor Degree in Architecture – University of Lisbon",
      contentText: "",
      contentDetailedText: "???",
    },
  ]
  return (
    <div className="timeline">
    </div>
  );
};

export default Timeline;
