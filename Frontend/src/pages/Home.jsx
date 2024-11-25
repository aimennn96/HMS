import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Department from '../components/Department'
import MessageForm from '../components/Messageform'
const Home = () => {
  return (
<>
<Hero
        title={
          "Welcome to ZeeCare Medical Institute |  Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
 <Biography imageUrl={"/about.png"} />
 <Department/>
 <MessageForm/> 
  </>    
    )
}

export default Home
