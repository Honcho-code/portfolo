import React from 'react'
import ProjectCard from './ProjectCard';

const Work = () => {
    const works = [
      {
          imgSrc: '/images/amber.png',
          title: 'Ember & Oak Restuarant service',
          subTitle: 'Ember & Oak is a restaurant service web application. It offers a seamless dining experience, allowing users to explore menus, make reservations, and place orders online. built with react, tailwind css',
          tags: ['Web-design', 'Development', "ui/ux", "Resturant", ],
          projectLink: 'https://ember-oak-snowy.vercel.app/',
        },
        {
          imgSrc: '/images/meridian.png',
          title: 'Meridian Estate',
          subTitle: "Meridian Estates is a real estate web application for a Lagos-based property agency. It allows users to explore premium property listings, filter by type and location, save favourites, and submit enquiries — all designed to turn visitors into qualified leads.",
          tags: ['Web-design', 'Development', "Real estate",],
          projectLink: 'https://meridian-estates-gamma.vercel.app/',
        },
        {
          imgSrc: '/images/soto.png',
          title: 'SOTO Resturant service',
          subTitle: "SOTO resturant is a restaurant service web application. It offers a seamless dining experience, allowing users to explore menus, make reservations, and place orders online. built with react, tailwind css",
          tags: ['Web-design', 'Development', "ui/ux", "Resturant", ],
          projectLink: 'https://soto-sable.vercel.app/',
        },
      {
          imgSrc: '/images/Removebg.jpg',
          title: 'Remove.bg',
          subTitle: "Remove.bg is a web application that allows users to remove backgrounds from images quickly and easily. Built with React and Tailwind CSS, it offers a user-friendly interface and seamless functionality.",
          tags: ['Web-design', 'Development', "ui/ux", "Api"],
          projectLink: 'https://removebg-gold.vercel.app/',
          githubLink: 'https://github.com/Honcho-code/Spotify-clone'
        },
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
      ];
      return (
        <section className='section' id="work">
          <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
              My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
              {works.map(({ imgSrc, title, tags, projectLink, githubLink, subTitle },key)=>(
                <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} subTitle={subTitle} projectLink={projectLink} githubLink={githubLink} classes="reveal-up"/>
              ))}
            </div>
          </div>
        </section>
      )
}

export default Work