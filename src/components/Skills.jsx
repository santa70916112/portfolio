const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Tailwind CSS, Bootstrap, Material UI', percentage: 100 },
        { name: 'Wordpress, Shopify', percentage: 90 },
        { name: 'React.js, Vue.js, Angular, Redux', percentage: 95 },
        { name: 'Next.js（React), Nuxt.js（Vue）', percentage: 85 },
        { name: 'Node.js, PHP(Laravel)', percentage: 90 },
        { name: 'React Native, Flutter', percentage: 85 }
      ]
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'MySQL, PostgreSQL', percentage: 90 },
        { name: 'MongoDB, Firebase', percentage: 95 },
        { name: 'Prisma, Sequelize, Mongoose', percentage: 92 },
        { name: 'Python, Java', percentage: 90 },
        { name: 'Git, GitHub, GitLab, Vercel', percentage: 97 },
        { name: 'Socket.io, Axios, API', percentage: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>スキル</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="col-lg-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="progress">
                  <span className="skill">
                    <span>{skill.name}</span> 
                    <i className="val">{skill.percentage}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      aria-valuenow={skill.percentage} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
