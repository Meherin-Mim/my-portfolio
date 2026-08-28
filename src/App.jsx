import './App.css'

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h2>Meherin Mim</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* Home */}
      <section id="home" className="hero">

        <div className="hero-text">
          <p>Hello, I'm</p>

          <h1>Meherin Mim</h1>

          <h2>Software Engineering Student</h2>

          <p>
            I am a passionate Software Engineering student interested
            in web development, programming and modern technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="btn">
              Contact Me
            </a>

            <a
              href="https://github.com/Meherin-Mim"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>

          </div>
        </div>


        <div className="profile">
          MM
        </div>

      </section>


      {/* About */}
      <section id="about" className="section">

        <h2>About Me</h2>

        <p className="about-text">
          I am a Software Engineering student who enjoys learning
          programming, web development and software design.
          I am continuously improving my technical skills by
          working on different academic and personal projects.
        </p>

      </section>


      {/* Skills */}
      <section id="skills" className="section">

        <h2>My Skills</h2>

        <div className="skills">

          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Java</div>
          <div className="skill">C</div>
          <div className="skill">PHP</div>
          <div className="skill">MySQL</div>

        </div>

      </section>


      {/* Projects */}
      <section id="projects" className="section">

        <h2>My Projects</h2>

        <div className="projects">

          <div className="project">

            <h3>Pet Shop Management System</h3>

            <p>
              A management system designed to manage pets,
              customers, products and sales information.
            </p>

            <p>
              <strong>Technology:</strong> PHP, MySQL
            </p>

          </div>


          <div className="project">

            <h3>Smart Waste Management System</h3>

            <p>
              A software engineering project designed to improve
              waste collection and management using a digital system.
            </p>

            <p>
              <strong>Technology:</strong> Software Engineering, Database
            </p>

          </div>


          <div className="project">

            <h3>Personal Portfolio</h3>

            <p>
              A responsive portfolio website created to showcase
              my skills, education and projects.
            </p>

            <p>
              <strong>Technology:</strong> React, CSS, JavaScript
            </p>

          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="section contact">

        <h2>Contact Me</h2>

        <p>
          Feel free to contact me for any questions or opportunities.
        </p>

        <p>Email: meherinmim13@gmail.com</p>

        <p>Location: Bangladesh</p>

      </section>


      {/* Footer */}
      <footer>

        <p>
          © 2026 Meherin Mim. All Rights Reserved.
        </p>

      </footer>

    </div>
  )
}

export default App