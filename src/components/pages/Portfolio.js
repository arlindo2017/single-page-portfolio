import React from "react";

const styles = {
  linkStyle: {
    margin: "0 10px",
    textDecoration: "none",
    background: "white",
  },
  cardBodyStyle: {
    backGroundColor: "white",
  },
  cardHeaderStyle: {
    padding: "10px",
  },
};

export default function Portfolio() {
  return (
    <div className="container">
      <h4>Portfolio</h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {/* cards */}
        <article className="col">
          <div className="card h-100">
            <h5 style={styles.cardHeaderStyle} className="card-title">
              Project Nexus
            </h5>
            <a
              style={styles.linkStyle}
              href="https://project-nexus.herokuapp.com/"
            >
              <img
                src="./assets/img/project-nexus-homepage.jpeg"
                className="card-img-top"
                alt="Dark Building with Coming Soon phrase"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                We're dedicated to bringing you the latest news and information
                on a wide range of topics, from entertainment and sports to
                technology and science.
              </p>
            </div>
            <div className="card-footer">
              <a
                style={styles.linkStyle}
                href="https://project-nexus.herokuapp.com/"
                className="link-secondary"
              >
                Website
              </a>
              <a
                style={styles.linkStyle}
                href="https://github.com/arlindo2017/project-nexus"
                className="link-secondary"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </article>
        <article className="col">
          <div style={styles.cardStyle} className="card h-100">
            <h5 style={styles.cardHeaderStyle} className="card-title">
              Astro News
            </h5>
            <a href="https://freewill201.github.io/Space-Repo/">
              <img
                src="./assets/img/space-repo-image.jpg"
                className="card-img-top"
                alt="Website with space news"
              />
            </a>
            <div style={styles.cardStyle} className="card-body">
              <p className="card-text">
                Astro News, your one-stop source for all things space!
              </p>
            </div>
            <div className="card-footer">
              <a
                style={styles.linkStyle}
                href="https://freewill201.github.io/Space-Repo/"
                className="link-secondary"
              >
                Website
              </a>
              <a
                style={styles.linkStyle}
                href="https://github.com/FreeWill201/Space-Repo"
                className="link-secondary"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </article>
        <article className="col">
          <div style={styles.linkStyle} className="card h-100">
            <h5 style={styles.cardHeaderStyle} className="card-title">
              Simple Text Editor
            </h5>
            <a href="https://jate-text-editor-application.herokuapp.com/">
              <img
                src="./assets/img/text-editor.jpg"
                className="card-img-top"
                alt="Screen capture of Portfolio website"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                A simple PWA (Progessive Web Application) Application
              </p>
            </div>
            <div className="card-footer">
              <a
                style={styles.linkStyle}
                href="https://jate-text-editor-application.herokuapp.com/"
                className="link-secondary"
              >
                Website
              </a>
              <a
                style={styles.linkStyle}
                href="https://github.com/arlindo2017/text-editor"
                className="link-secondary"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </article>
        {/* weather app */}
        <article className="col">
          <div style={styles.linkStyle} className="card h-100">
            <h5 style={styles.cardHeaderStyle} className="card-title">
              Climate Cove
            </h5>
            <a href="https://arlindo2017.github.io/climate-cove/">
              <img
                src="./assets/img/climate-cove.jpg"
                className="card-img-top"
                alt="Screen capture of Portfolio website"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                In this weather dashboard application you can see the current
                weather along with the forecast for the next 5 days for a
                specific US city. After searching for a specific city, that city
                is added to the search history for future reference.
              </p>
            </div>
            <div className="card-footer">
              <a
                style={styles.linkStyle}
                href="https://arlindo2017.github.io/climate-cove/"
                className="link-secondary"
              >
                Website
              </a>
              <a
                style={styles.linkStyle}
                href="https://github.com/arlindo2017/climate-cove"
                className="link-secondary"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </article>
        {/* code quizz */}
        <article className="col">
          <div style={styles.linkStyle} className="card h-100">
            <h5 style={styles.cardHeaderStyle} className="card-title">
              JavaScript Quizz Game
            </h5>
            <a href="https://arlindo2017.github.io/code-quiz/">
              <img
                src="./assets/img/javascript-quiz.jpg"
                className="card-img-top"
                alt="Screen capture of Portfolio website"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                In this quiz, you will be asked 10 random beginner javascript
                questions to test your knowledge. Game starts with 100 seconds
                on the clock (10 seconds per question) if you answered them
                incorrectly 10 seconds will be removed from the timer, at the
                end of the Quiz you can save your initials and score. If the
                clock runs out, you loose the game.
              </p>
            </div>
            <div className="card-footer">
              <a
                style={styles.linkStyle}
                href="https://arlindo2017.github.io/code-quiz/"
                className="link-secondary"
              >
                Website
              </a>
              <a
                style={styles.linkStyle}
                href="https://github.com/arlindo2017/code-quiz"
                className="link-secondary"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </article>
        {/* galaxy geek */}
        <article className="col">
          <div style={styles.linkStyle} className="card h-100">
            <h5 style={styles.cardHeaderStyle} className="card-title">
              Galaxy Geek
            </h5>
            <a href="https://galaxy-geek.herokuapp.com/">
              <img
                src="./assets/img/galaxy-geek-fullpage-cover.jpg"
                className="card-img-top"
                alt="Screen capture of Portfolio website"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                We cover a wide range of Samsung Galaxy phones, from the latest
                models to the older ones, so you can find the information you
                need to make an informed decision about your next purchase. Our
                reviews cover everything from design, display, camera,
                performance, battery life, and more.
              </p>
            </div>
            <div className="card-footer">
              <a
                style={styles.linkStyle}
                href="https://galaxy-geek.herokuapp.com/"
                className="link-secondary"
              >
                Website
              </a>
              <a
                style={styles.linkStyle}
                href="https://github.com/arlindo2017/galaxy-geek"
                className="link-secondary"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
