import React from 'react'
import ProjectCard from './ProjectCard';

const Work = () => {
    const works = [
      {
          imgSrc: '/images/quoteme.png',
          title: 'QUOTEME(Full stack web app to design amazing Quote art)',
          tags: ['Web-design', 'Development', "ui/ux"],
          projectLink: 'https://qouteme.vercel.app/',
          githubLink: 'https://github.com/Honcho-code/Spotify-clone'
        },
      {
          imgSrc: '/images/Gostream.jpg',
          title: 'Go stream(Full stack music streaming webApp)',
          tags: ['Web-design', 'Development', "api", "Auth"],
          projectLink: 'https://go-stream-livid.vercel.app/',
          githubLink: 'https://github.com/Honcho-code/Spotify-clone'
        },
        {
          imgSrc: '/images/MovieBing.jpg',
          title: 'MovieBing (Movie research webapp)',
          tags: ['Development', 'API', "Authentication"],
          projectLink: 'https://moviebing-three.vercel.app',
          githubLink: 'https://github.com/Honcho-code/moviebing'
        },
        {
          imgSrc: '/images/Tconnect.jpg',
          title: 'Tech-connect(Social media app)',
          tags: ['Development', 'Firebase', "Authentication"],
          projectLink: 'https://tech-connect-eta.vercel.app/',
          githubLink: 'https://github.com/Honcho-code/tech-connect'
        },
      {
        imgSrc: '/images/project-7.jpg',
          title: 'Comfort estate website',
          tags: ['Design', 'MVC', 'Development'],
          projectLink: 'https://comfort-home-ashy.vercel.app/',
          githubLink: 'https://github.com/Honcho-code/Home-estate'
        },
        {
          imgSrc: '/images/project-2.jpg',
          title: 'Fullstack bank app',
          tags: ['Development', 'SPA'],
          projectLink: 'https://bank-app-beryl.vercel.app',
          githubLink: 'https://github.com/Honcho-code/Bank-app'
        },
        
        {
          imgSrc: '/images/project-1.jpg',
          title: 'Real estate website',
          tags: ['Design', 'MVC', 'Development'],
          projectLink: 'https://home-estate-gamma.vercel.app/',
          githubLink: 'https://github.com/Honcho-code/Home-estate'
        },
        {
          imgSrc: '/images/project-3.jpg',
          title: 'eCommerce website',
          tags: ['Development', 'API', 'eCommerce', 'Design'],
          projectLink: 'https://best-buy-lemon.vercel.app/',
          githubLink: 'https://github.com/Honcho-code/Best-buy'
        },
        
        {
          imgSrc: '/images/project-5.jpg',
          title: 'Portfolio website',
          tags: ['Web-design', 'Development'],
          projectLink: 'https://rapheal-clinton.vercel.app/',
          githubLink: 'https://github.com/Honcho-code/Spotify-clone'
        },
      ];
      return (
        <section className='section' id="work">
          <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
              My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
              {works.map(({ imgSrc, title, tags, projectLink, githubLink },key)=>(
                <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} githubLink={githubLink} classes="reveal-up"/>
              ))}
            </div>
          </div>
        </section>
      )
}

export default Work