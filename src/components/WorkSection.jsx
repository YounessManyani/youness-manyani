import React from "react";
import ateliercoton from "../assets/ateliercoton.png"
import MakeUp_Zones from "../assets/MakeUp-Zones.png"
import Figma_designer from "../assets/Figma-designer.png"
import Youness_manyani_logo from "../assets/Youness-manyani-logo.png"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Sample data for experiences
const experiences = [
  {
    date: "2024 - Present",
    title: "Frontend Developer",
    company_name: "Youness Manyani.",
    icon: Youness_manyani_logo,
    points: [
      "-Élaboration de maquettes de site sur Figma pour un design optimal.",
      "-Conception et réalisation de sites web réactifs et dynamiques en utilisant React JS.",
      "-Inclusion de mes expériences professionnelles, compétences techniques et informations personnelles" 
    ]
  },
  {
    date: "2023 - 2024",
    title: "Frontend Developer",
    company_name: "Makeup Zones.",
    icon: MakeUp_Zones,
    points: [
      "-Conception des interfaces utilisateur (UI) et expérience utilisateur (UX) en utilisant Figma.",
      "-Création complète d'une boutique en ligne pour garantir un fonctionnement optimal du site e-commerce avec la platforme Shopify.",
      "-Intégration efficace de la boutique sur Facebook/Instagram afin d'accroître la visibilité et les ventes.",
      "-Collaboration étroite avec l'équipe marketing pour la création de campagnes publicitaires."
    ]
  },
  {
    date: "2022 - 2023",
    title: "Frontend Developer",
    company_name: "Atleier Coton",
    icon: ateliercoton,
    points: [
      "-Collaboration avec l'équipe de design pour mettre en œuvre les conceptions UI/UX.",
      "-Transformation de la boutique en ligne pour aboutir à un site marchand à 80%.",
      "-Intégration réussie de la boutique Facebook/Instagram, pour une augmentation de la visibilité et des ventes."
    ]
  },
  {
    date: "2020 - 2022",
    title: "Designer ",
    company_name: "freelance.",
    icon: Figma_designer,
    points: [
      "-Expérience de 2 ans en tant que designer freelance, spécialisé dans Figma",
      "-Travaillé sur la conception et l'optimisation des interfaces utilisateurs.",
      "-Participé à des revues de code et des réunions d'équipe."  
    ]
  },
  // Add more experiences here
];

const Experience = () => {
  return (
    <div style={{ background: "black" }} id="worksection">
      <h2 className="mb-4 text-white text-center  text-4xl font-body font-normal tracking-wide">WORK EXPERIENCE</h2>
      <VerticalTimeline className="vertical-timeline-custom-line">
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#B18037", color: "#fff" }}
            date={experience.date}
            iconStyle={{ background: "#B18037", color: "#fff" }}
            icon={<img src={experience.icon} alt={experience.company_name} className=" rounded-3xl" />}
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.company_name}</h4>
            <ul>
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
