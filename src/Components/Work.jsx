import React from 'react'
import ProjectCard from './ProjectCard';

const Work = () => {
    const works = [
      {
          imgSrc: '/images/fittrack.png',
          title: 'AI-Powered Food Calorie Estimation & Fitness Tracking System',
          subTitle: "Final-year BSc project. Designed and built a web application that combines AI-based food calorie estimation with user-facing fitness tracking tools. The system allows users to upload images of their meals, which are then analyzed using a trained AI model to estimate the calorie content.",
          tags: ['Web-design', "ui/ux", "AI", "Fitness", "Calorie estimation"],
          projectLink: ' https://fittracker-1.vercel.app/',
        },
        {
          imgSrc: '/images/dualsub.png',
          title: 'Dual Sub (subscription shared between multiple users)',
          subTitle: "Next.js 14, MongoDB, Paystack — subscription reseller platform rebuilt from an Express/MongoDB backend into a Next.js App Router application. Built a multi-step checkout flow, integrated Paystack payments, and designed and seeded a MongoDB Atlas database for production use.",
          tags: ['Web-design', 'Development', "Real estate", "Subscription", "Payment"],
          projectLink: ' https://dualsub-nine.vercel.app/',
        },
        {
          imgSrc: '/images/clearance.png',
          title: 'Online University Clearance System',
          subTitle: "The Online University Clearance System is a web application designed to streamline the clearance process for students. Built with React and Tailwind CSS, it allows students to submit required documents, track their clearance status, and receive notifications.",
          tags: ['Web-design', 'Development', "ui/ux", "Authentication", "Database"],
          projectLink: 'https://school-clearance-system.vercel.app/',
        },
      {
          imgSrc: '/images/backgroundremoval.png',
          title: 'Remove.bg',
          subTitle: "Remove.bg is a web application that allows users to remove backgrounds from images quickly and easily. Built with React and Tailwind CSS, it offers a user-friendly interface and seamless functionality.",
          tags: ['Web-design', 'Development', "ui/ux", "Api"],
          projectLink: 'https://removebg-gold.vercel.app/',
          githubLink: 'https://github.com/Honcho-code/Spotify-clone'
        },
      {
          imgSrc: '/images/quoteme.png',
          title: 'QUOTEME(Full stack web app to design amazing Quote art)',
          subTitle: "QUOTEME is a full-stack web application that allows users to create and customize beautiful quote art. Built with React and Tailwind CSS, it offers a user-friendly interface and seamless functionality.",
          tags: ['Web-design', 'Development', "ui/ux"],
          projectLink: 'https://qouteme.vercel.app/',
          githubLink: 'https://github.com/Honcho-code/Spotify-clone'
        },
      {
          imgSrc: '/images/gostream.png',
          title: 'Go stream(Full stack music streaming webApp)',
          subTitle: "Go stream is a full-stack music streaming web application that allows users to listen to their favorite songs, create playlists, and discover new music. Built with React and Tailwind CSS, it offers a user-friendly interface and seamless functionality.",
          tags: ['Web-design', 'Development', "api", "Auth"],
          projectLink: 'https://go-stream-livid.vercel.app/',
          githubLink: 'https://github.com/Honcho-code/Spotify-clone'
        },
        {
          imgSrc: '/images/moviebing.png',
          title: 'MovieBing (Movie research webapp)',
          subTitle: "MovieBing is a web application that allows users to search for movies, view details, and create watchlists. Built with React and Tailwind CSS, it offers a user-friendly interface and seamless functionality.",
          tags: ['Development', 'API', "Authentication"],
          projectLink: 'https://moviebing-three.vercel.app',
          githubLink: 'https://github.com/Honcho-code/moviebing'
        },
        {
          imgSrc: '/images/Tconnect.jpg',
          title: 'Tech-connect(Social media app)',
          subTitle: "Tech-connect is a social media application that allows users to connect with friends, share updates, and discover new content. Built with React and Tailwind CSS, it offers a user-friendly interface and seamless functionality.",
          tags: ['Development', 'Firebase', "Authentication"],
          projectLink: 'https://tech-connect-eta.vercel.app/',
          githubLink: 'https://github.com/Honcho-code/tech-connect'
        },        
        {
          imgSrc: '/images/project-1.jpg',
          title: 'Real estate website',
          subTitle: "A real estate website built with Next.js and Tailwind CSS. It features a responsive design, property listings, and a user-friendly interface.",
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