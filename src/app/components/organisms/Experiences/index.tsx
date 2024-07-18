import ExperienceCard from "../../molecules/ExpericenceCard";
import styles from "./styles.module.scss";

export default function Experiences() {
  return (
    <section id="experience" className={styles.container}>
      <h2>Experience</h2>

      <ul className={styles.expericesList}>
        <ExperienceCard
          key={1}
          title="Fullstack Developer at Uhuu!"
          date="June 2023 - Present"
          description="As a fullstack developer at Uhuu!, I was responsible for developing and maintaining the company's website and internal systems. I collaborate with the design team to create a user-friendly interface and ensure the responsiveness of the site. I optimize system performance for thousands of users and implement new features to improve the user experience. In addition, I provide on-call support for applications in production, develop SQL queries for data extraction and participate in daily meetings with the technical team."
        />
        <ExperienceCard
          key={2}
          title="Fullstack Developer at Albert Einstein"
          date="March 2022 - July 2023"
          description="As a Fullstack Developer at Albert Einstein, I was responsible for developing and maintaining dashboards using React, Typescript, and Styled Components. I develop and maintain APIs with Node.js, Typescript, NestJs, and SQL, and document these APIs with Swagger. I use Docker for local development and deploy applications on AWS both manually and through CI/CD pipelines. Additionally, I ensure code quality through automated testing with Jest and Supertest, and follow a Scrum-based development process to manage tasks and deliverables."
        />
        <ExperienceCard
          key={3}
          title="Fullstack Developer at Bizsys"
          date="May 2021 - February 2022"
          description="As a Fullstack Developer at Bizsys, I was responsible for developing on-demand applications using React, Next.js, Styled Components, and Unity. I deploy these applications on AWS, ensuring they are accessible and performant for users."
        />
        <ExperienceCard
          key={4}
          title="Programming Monitor at Recode"
          date="December 2020 - March 2021"
          description="As a Programming Monitor, I tutor students three times a week, and teach programming classes focusing on React, Node.js, and JavaScript twice a week. I am responsible for correcting projects, preparing activities, and making decisions with the team to enhance the learning experience."
        />
      </ul>
    </section>
  );
}