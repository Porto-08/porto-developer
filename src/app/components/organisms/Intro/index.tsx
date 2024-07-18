import styles from './styles.module.scss';
import Image from 'next/image';
import ProfilePicture from '../../../assets/images/profile.jpg'
import { 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaPhp,
} from 'react-icons/fa'
import { SiMysql, SiServerless, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";



export default function Intro() {
  return (
    <section className={styles.container}>
      <Image 
        src={ProfilePicture} 
        alt="Profile Picture" 
        width={1024} 
        height={768} 
        className={styles.profile}
        quality={80}
        sizes="100vw"
      />

      <h1 className={styles.title}>
          I do code and <br />
          like to solve problems!
      </h1>

      <p className={styles.description}>
        I am a Fullstack Developer with over 4 years of experience in agile environments,
        developing and implementing web applications, with a strong background
        using React, Node.js, PHP, AWS and other technologies.
      </p>

      <div className={styles.btnBox}>
        <a href="#" className='btn btn-primary'>Get In Touch</a>
        <a href="#" className='btn btn-secondary'>Download CV</a>  
      </div> 

      <div className={styles.experienceBox}>
        <h3>Working with</h3>

        <div>
          <FaReact />
          <FaNodeJs />
          <SiTypescript />
          <FaPhp />
          <FaAws />
          <RiNextjsFill />
          <SiServerless />
          <SiMysql />
        </div>
      </div>
    </section>
  );
}