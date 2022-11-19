import styles from './Header.module.css'
import ignitelog from '../assets/Ignite_simbol.svg'

export function Header(){
  return (

    <header className={styles.header}>
      <img src={ignitelog} alt="Logotipo"></img>
      <strong>Ignite Feed</strong>
    </header>

  );

}