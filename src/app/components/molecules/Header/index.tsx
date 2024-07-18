import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.header}>
        <Link href="/" className={styles.logo}>
          <img src="#" alt="Samuel Porto" />
        </Link>

        <ul>
          <li>
            <Link href="#experience" className='link'>Experience</Link>
          </li>
          <li>
            <Link href="#contact" className='link'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
