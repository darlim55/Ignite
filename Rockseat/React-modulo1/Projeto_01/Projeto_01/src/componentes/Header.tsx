import log from '../assets/rocket.svg';
import styles from './Header.module.css'
export function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.logos}>
        <img src={log} className={styles.log}></img>
        <span className={styles.text}> todo</span>
        </div>
    </header>

  );
}