const About = () => {

  // project info 
  const projectBrief = {
    projectTitle: "Random \"Quote\" Generator",
    projectDescription: "A simple front-end web project built using React.js that generates random quotes using the quotable API",
    projectContext: "This was a basic project/task assigned to me as an assessment before my internship at <a href='https://ekatvaminnovations.com/' target='_blank'>Ekatvam Innovations</a>. It touches all the basic parts of react, so I learned a lot about the fundamentals and basics of React and it allowed me to demonstrate my understanding of React fundamentals.",
    toolsUsed: [
      {
        title: "Vite",
        description: "Build Tool"
      },
      {
        title: "quotable API",
        description: "Fetch Quotes"
      },
      {
        title: "Redux",
        description: "State Management"
      },
      {
        title: "Framer-Motion",
        description: "Animations"
      },
      {
        title: "Firebase Authentication",
        description: "Google SSO"
      },
      {
        title: "Sass",
        description: "Styling"
      }
    ]
  }

  // navigate github repo 
  const goToGithub = () => {
    window.open("https://github.com/shriramkhandbahale/wisewords");
  }

  return (
    <div className="about-page">
      <div className="about-page__container">
        <section className="about-page__container__project-info" id="project-info">
          <div className="about-page__container__project-info__title">
            <h1>{projectBrief.projectTitle}</h1>
          </div>
          <div className="about-page__container__project-info__description">
            <p>
              {projectBrief.projectDescription}
            </p>
          </div>
          <div className="about-page__container__project-info__context">
            <p dangerouslySetInnerHTML={{ __html: projectBrief.projectContext }}></p>
          </div>
        </section>
        <section className="about-page__container__tools-used" id="tools-used">
          <h2>Tools used</h2>
          <ul>
            {projectBrief.toolsUsed.map((e, key) => {
              return <li><span id="title">{e.title} -</span> ({e.description})</li>
            })}
          </ul>
        </section>
        <section className="about-page__container__github">
          <button onClick={goToGithub}>Github</button>
        </section>
      </div>
    </div>
  )
}

export default About;
