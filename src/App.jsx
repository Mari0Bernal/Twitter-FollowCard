import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'M4jir0',
    name: 'Mario',
    isFollowing: true
  },
  {
    userName: 'jnlh863',
    name: 'Jahir',
    isFollowing: false
  },
  {
    userName: 'jonathan',
    name: 'Tatalan',
    isFollowing: false
  }
]

function App() {
  return (
    <div className='App'>
      {/*<TwitterFollowCard userName={'M4jir0'}>
        Majiro
      </TwitterFollowCard>
      <TwitterFollowCard userName={'luisFernando'}>
        Luisardo
      </TwitterFollowCard>
      <TwitterFollowCard userName={'jnlh863'}>
        Jahir Nicolas
      </TwitterFollowCard>*/}

      {
        users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard 
              key={userName}
              userName={userName} 
              initialFollowing={isFollowing}
            >
              {name}  
            </TwitterFollowCard>
        ))
      }
    </div>
  )
}

export default App
