import React from 'react'

const Body = () => {
  return (
    <div className='body'>
          <div>
            <h1>NO HUDDLE NEEDED<br></br>SPORTS SHOW</h1>
            <h2>COMING SOON!</h2>
            <img src={nhnLogo} className='brand'/>
         
          </div>
             <br></br>
            <br></br>
            <br></br>
            <br></br>
          <div className='socials'>
            <a href="https://x.com/NoHudNeeded" target="_blank">
              <img src={xLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://www.youtube.com/@NoHuddleNeeded" target="_blank">
              <img src={ytLogo} className="logo" alt="Vite logo" />
            </a>
             <a href="https://instagram.com" target="_blank">
              <img src={igLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://tiktok.com/@NoHuddleNeeded" target="_blank">
              <img src={tokLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://patreon.com/NHNSportsShow" target="_blank">
              <img src={patLogo} className="logo" alt="Vite logo" />
            </a>
          </div>
           <p className="footnote">
            Follow Our Socials Above!
          </p>
     
        </div>
  )
}

export default Body