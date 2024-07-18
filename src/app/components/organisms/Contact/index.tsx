import styles from "./styles.module.scss";
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3>Contact</h3>

        <p>
          If you have any questions or want to know more about me, feel free to
          contact me.
        </p>

        <span className={styles.emailBox}>
          <BiMailSend />
          <Link
            href="mailto:samuelalcala2001@outlook.com"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            samuelalcala2001@outlook.com
          </Link>
        </span>

        <div className={styles.socialMediaBox}>
          <Link
            href="https://www.linkedin.com/in/samuelporto/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/Porto-08/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.instagram.com/porto__0/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </section>
  );
}
