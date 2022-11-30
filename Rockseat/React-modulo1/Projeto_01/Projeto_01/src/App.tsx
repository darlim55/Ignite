import './global.css'
import { Header } from './componentes/Header'
import { Search } from './componentes/ Search'
import { Menu } from './componentes/Menu'




export function App(){
  return (
    <div>
      <header>
        <Header/>
      </header>

      <main>
        <Search/>
        <Menu/>
      </main>
    </div>

  )
}