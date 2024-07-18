'use client';
import React from "react";
import Slider from "react-slick";
import projects from "../../../assets/data/projects.json"
import { Project } from "@/app/types";
import ProjectCard from "../../molecules/ProjectCard";
import styles from "./styles.module.scss";
import { settings } from "./settings";

export default function Projects() {
  const data = projects as unknown as Project[];

  return (
    <div className={styles.container}>
      <h2>Projects</h2>

      <Slider {...settings} className="slider-container">
        {data.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Slider>
    </div>
  );
}