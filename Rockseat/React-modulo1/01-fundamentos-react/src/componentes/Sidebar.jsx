import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css'
import {Avatar} from './Avatar';
export function Sidebar(){
  return (

    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHdhcmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=40&h=200" />
      <div className={styles.profile}>

       <Avatar src="https://pbs.twimg.com/profile_images/1476979321931763712/-au0geb1_400x400.jpg"></Avatar>

        <strong>Jorge Darlim</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>

          <PencilLine size={20}></PencilLine>
          Editar seu perfil
        </a>
      </footer>

    </aside>

  );


}