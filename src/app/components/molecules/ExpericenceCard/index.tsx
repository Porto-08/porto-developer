import styles from "./styles.module.scss";

type ExperienceCardProps = {
  title: string;
  date: string;
  description: string;
};

export default function ExperienceCard({
  title,
  date,
  description,
}: ExperienceCardProps) {
  return (
    <li className={styles.card}>
      <div>
        <h3>{title}</h3>
        <span>{date}</span>
      </div>

      <p>{description}</p>
    </li>
  );
}
