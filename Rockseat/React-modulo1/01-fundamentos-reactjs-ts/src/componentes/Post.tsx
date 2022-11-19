import { Article, LineSegment } from 'phosphor-react'
import { Comment } from './Comment'
import styles from './Post.module.css'
import {Avatar} from './Avatar';
import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns/esm';
import ptbr from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author{
  name: string,
  role: string,
  Avatarurl: string
}

interface Content{
  type: string,
  content: string
}
interface postProps{
  author:Author
  date: Date,
  content: Content[],

}

export function Post({author,date,content}: postProps){

  const [comments, setomments] = useState(
    [
      "Post muito bacana"
,      
    ])

  const [newCommentText, setnewCommentText] = useState('')

  const dataformt = format(date, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptbr})

  const datenow = formatDistanceToNow(date
    , {
      locale: ptbr,
      addSuffix: true,
    }
    )

  function daterelativenow(event: FormEvent){
   
    event.preventDefault()
    setomments([...comments, newCommentText])
    setnewCommentText('')
  }

  function handlenewComment(event: ChangeEvent<HTMLTextAreaElement>){
    setnewCommentText(event.target.value)
    event.target.setCustomValidity('')

  }

  function deleteComment(commentdelete: string){
    const commentsWithoutDeleteone = comments.filter(comment => {return comment != commentdelete })
    setomments(commentsWithoutDeleteone)
  }

  function handlenewCommentinvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo e obrigatorio')

  }


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src= {author.Avatarurl} />
            <div className={styles.info}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
        </div>

        <time title={dataformt} dateTime={date.toISOString()}>
        {datenow}
        </time>
      </header>

      <div className={styles.content}>
       
        {content.map(key => {
          if(key.type == 'paragraph')
            return <p key={key.content}>{key.content}</p>
          else if(key.type == 'link')
            return <p key={key.content}><a href='$'>{key.content}</a></p>
        })}

      </div>
      
      <form onSubmit={daterelativenow} className={styles.form}>
        <strong>Deixe seu comentario</strong>
        <textarea 
          name='text' 
          placeholder='Deixe um comentario'
          onChange={handlenewComment}
          value={newCommentText} 
          required
          onInvalid={handlenewCommentinvalid}
        ></textarea>
        <footer>
          <button  disabled={newCommentText.length ===0} type='submit'>Comentar</button>
        </footer>
      </form>

       
      <div className={styles.comment}>
        {comments.map(comment => {
          return <Comment deleteComment={deleteComment} key={comment} content={comment}/>

        })}
      
    
      
      </div>
  
    </article>

  )
}

