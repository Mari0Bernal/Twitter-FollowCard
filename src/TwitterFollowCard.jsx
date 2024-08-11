import { useState } from "react"

export function TwitterFollowCard({userName, children, initialFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialFollowing);
    const img = `https://unavatar.io/${userName}` 
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return(
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img src={img} alt="Avatar Error" className='tw-followCard-avatar'/>
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <button className={buttonClassName} onClick={handleClick}>
        <span className="tw-followCard-text">{text}</span>
        <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
      </button>
    </article>
    )
}