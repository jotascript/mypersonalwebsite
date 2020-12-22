import SkillComponentStyles from './styles'

const SKILLS = [
  {
    name: 'JavaScript',
    level: 5,
  },
  {
    name: 'NodeJS',
    level: 4,
  },
  {
    name: 'React (JS/Native)',
    level: 4,
  },
  {
    name: 'TypeScript',
    level: 4,
  },
  {
    name: 'Next.js',
    level: 3,
  },
  {
    name: 'Python',
    level: 3,
  },
  {
    name: 'Django',
    level: 2,
  },
  {
    name: 'Docker',
    level: 1,
  },
]

const LEVELS = Array(5).fill().map((_, i) => i + 1)

let scrollTimeout = null

const Skills = () => {
  const scrollHandle = event => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      const skillsRef = document.querySelector('.skills')
      const elementSkillRefs = document.querySelectorAll('.skill')
      const scrollLeft = event.target.scrollLeft
      const spaceBetween = 34

      const skillRefs = Array.from(elementSkillRefs).map(skillRef => ({
        skillRef,
        offsetLeft: skillRef.offsetLeft + spaceBetween - scrollLeft
      }))
      const [{ skillRef }] = skillRefs.filter(skillRef => skillRef.offsetLeft >= 0)

      if (scrollLeft !== skillRef.offsetLeft) {
        skillsRef.scrollTo({
          top: 0,
          left: skillRef.offsetLeft - spaceBetween,
          behavior: 'smooth',
        })
      }
    }, 500)
  }

  return (
    <SkillComponentStyles>
      <div className="topic"><strong>Skills</strong></div>
      <div
        onScrollCapture={scrollHandle}
        className="skills"
      >
        {
          SKILLS.map((skill, sIdx) => (
            <div
              key={`skill-${sIdx}`}
              className="skill"
            >
              <div className="name"><strong>{skill.name}</strong></div>
              <div className="levels">
                {
                  LEVELS.map((level, lIdx) => (
                    <div
                      key={`level-${sIdx}-${lIdx}`}
                      className={`level ${level <= skill.level ? 'level-high' : ''}`}
                    >
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </SkillComponentStyles>
  )
}

export default Skills
