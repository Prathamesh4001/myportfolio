import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './ui/componants/header'
import { Name } from './ui/componants/name'
import { Projects } from './ui/componants/projects'
import { Contact } from './ui/componants/contact'

function App() {
   const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
   <Name/>
   <Projects/>
   <Contact/>



 








    </>
  )
}

export default App
