import { Project } from "@/app/types";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function ProjectCard(project: Project) {
  return (
    <div key={project.id} className={styles.card}>
      <Image 
        src={project.pathPhoto} 
        alt={project.name}
        className={styles.cardImage} 
        width={300}
        height={200}
      />

      <div className={styles.cardBody}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        
        <div className={styles.cardLinksBox}>
          {project.link != '#' && (
            <a href={project.link} className="link btn-primary" target="_blank" rel="noreferrer">
              Website
            </a>
          )}
          
          {project.github != '#' && (
            <a href={project.github} className="link btn-primary" target="_blank" rel="noreferrer">
              Code
            </a>
          )}
          
        </div>
      </div>
    </div>
  );
}
