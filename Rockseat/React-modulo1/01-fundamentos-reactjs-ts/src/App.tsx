import { Header } from './componentes/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './componentes/Sidebar'
import {Post} from './componentes/Post'

const posts = [
  {
    id : 1,
    author : {
      Avatarurl : "https://pbs.twimg.com/profile_images/1476979321931763712/-au0geb1_400x400.jpg",
      name: "Jorge Darlim",
      role: "Web Developer",
    },
    content : [ 
      {type: "paragraph"  , content: "Fala galeraa 👋"},
      {type: "paragraph" , content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "ane.design/doctorcare"}],
    date: new Date('2022-08-17 09:22:00'),
  },
  {
    id : 2,
    author : {
      Avatarurl : "https://pbs.twimg.com/profile_images/1476979321931763712/-au0geb1_400x400.jpg",
      name: "Jorge Darlim",
      role: "Developer"
    },
    content : [ 
      {type: "paragraph"  , content: "Fala galeraa 👋"},
      {type: "paragraph" , content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "ane.design/doctorcare"}],
    date: new Date('2022-08-15 09:22:00'),
  },

]

export function App() {

  return (
    
    <div>
      <Header/>
      <div className={styles.arapper}>
        <Sidebar/>
        <main>
          {posts.map(post =>{
            return (<Post
              key={post.id}
              author = {post.author}
              date = { post.date}
              content = { post.content}
            />)
          })}
          
        </main>
      </div>
    </div>

    )
}

