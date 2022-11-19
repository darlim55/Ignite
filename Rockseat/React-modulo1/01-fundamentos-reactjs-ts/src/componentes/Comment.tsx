import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import {Avatar} from './Avatar';
import { useState } from 'react';

interface Commentpropos{
  content: string,
  deleteComment: (comment: string) => void
}


export function Comment(props: Commentpropos){

  const [likecount, setLikecount] = useState(0);

  function handleLikeComment(){
    setLikecount(likecount + 1)
  }
  function handleDelete(){
    props.deleteComment(props.content)

  }
  return (

    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://pbs.twimg.com/profile_images/1476979321931763712/-au0geb1_400x400.jpg" alt=''/>
      <div className={styles.commentbox}>
          <div className={styles.content}>
            <header>
              <div className={styles.author}>
                <strong>Jorge Darlim</strong> 
                <time title='11 de Maios ás 08:13h' dateTime='2022-05-11 08:13:38'>Cerca de 1h atrás</time>
              </div>   

              <button onClick={handleDelete} title='Deletar comentario'>
                <Trash size={24}/>

              </button>  
            </header>
            <p>{props.content}</p>      

          </div>

          <footer> 
            <button onClick={handleLikeComment}><ThumbsUp/>
            Aplaudir
             <span>{likecount}</span></button>
            
            </footer>

      </div>
    </div>
  )


}