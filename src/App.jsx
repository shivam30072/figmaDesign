import { useState } from 'react'
import { Navbar, Cover, Section, ProfileCard } from './components/Files'

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={`${toggle ? 'bg-black/60' : ''}`}>

     <Navbar toggle= {toggle} setToggle={setToggle}/>
     <Cover toggle= {toggle} setToggle={setToggle}/>
     <Section />
     <ProfileCard />
    
    </div>
  )
}

export default App