import {useRef} from "react";
import {Link} from "react-router-dom";
import './Home2Styles.sass'
import weatherImage from '../imgs/weatherapp.png'
import aniImage from '../imgs/animations.png'
import cactImage from '../imgs/cactpot.png'
import portImg from '../imgs/port2.png'


function Home2() {
    const projRef = useRef(null);
    const aboutRef = useRef(null);

    const handleProj = () => {
        projRef.current?.scrollIntoView({behavior: 'smooth', block: "start"})
    }

    const handleAbout = () => {
        aboutRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <>
          <div className={'home2-container'}>
              <div className={'home2-wrapper'}>
                  <div className={'home2-align-content'}>
                      <div className={'home2-fixed-width'}>
                          <header className={'home2-header'}>
                              <nav className={'home2-nav'}>
                                  <div className={'nav-logo'}>
                                      <Link className={'nav-link'} to={'https://github.com/AxAnder0095'}>AX</Link>
                                  </div>
                                  <div className={'nav-links'}>
                                      <Link className={'nav-link'} to={'/'} onClick={handleAbout}>ABOUT</Link>
                                      <Link className={'nav-link'} to={'/'} onClick={handleProj}>PROJECTS</Link>
                                      <Link className={'nav-link'} to={'https://github.com/AxAnder0095'}>GITHUB</Link>
                                      <Link className={'nav-link'} to={'https://www.linkedin.com/in/alexander-brown-543337216/'}>LINKEDIN</Link>
                                  </div>
                              </nav>
                          </header>
                          <main className={'home2-main'}>
                              <section className={'home2-intro-section-wrapper'}>
                                  <article>
                                      <p className={'first-name'}>ALEXANDER</p>
                                      <p className={'last-name'}>BROWN</p>
                                      <p className={'sub-text'}>Front-End Development</p>
                                      <p className={'sub-text'}>UX / UI Design</p>
                                  </article>
                              </section>

                              {/*div used for exact position for about*/}
                              <div ref={aboutRef}></div>
                              <section className={'home2-about-section-wrapper'}>
                                  <div>
                                      <p className={'home2-about-title'}>ABOUT</p>
                                      <div className={'home2-about-desc-wrapper'}>
                                          <p className={'home2-about-desc'}>Graduate from Aurora University that has a passion for Front end
                                              Development. On my free time I enjoy weight training and cooking
                                              but my favorite thing to do is learn new Front End skills to better
                                              myself as a Developer.</p>
                                      </div>
                                  </div>
                              </section>
                              <div ref={projRef}></div>
                              <section className={'home2-projects-section-wrapper'}>
                                  <div className={'center-projects-container'}>
                                      <p className={'home2-projects-title'}>PROJECTS</p>
                                      <div className={'home2-projects-grid'}>
                                          <div className={'home2-projects-left'}>
                                              <Link to={'https://github.com/AxAnder0095/personalwebsite'} className={'home2-project-link'}>
                                                  <div className={'picture-box'}>
                                                      <img src={portImg} alt={'some image'}/>
                                                  </div>
                                                  <div className={'text-box'}>
                                                      <p className={'home2-project-title'}>Portfolio</p>
                                                      <p className={'home2-project-desc'}>My third portfolio website with
                                                      improvements to responsiveness. Used Figma for initial design</p>
                                                  </div>
                                              </Link>
                                              <Link to={'https://github.com/AxAnder0095/Mini-Cacptot-Game'} className={'home2-project-link'}>
                                                  <div className={'picture-box'}>
                                                      <img src={cactImage} alt={'scratch off game image'}/>
                                                  </div>
                                                  <div className={'text-box'}>
                                                      <p className={'home2-project-title'}>Mini Cactpot</p>
                                                      <p className={'home2-project-desc'}>Scratch off mini game from the
                                                      MMO RPG Final Fantasy 14.</p>
                                                  </div>
                                              </Link>
                                          </div>
                                          <div className={'home2-projects-right'}>
                                              <Link to={'https://github.com/AxAnder0095/weatherapp'} className={'home2-project-link'}>
                                                  <div className={'picture-box'}>
                                                      <img src={weatherImage} alt={'weather app image'}/>
                                                  </div>
                                                  <div className={'text-box'}>
                                                      <p className={'home2-project-title'}>Weather App</p>
                                                      <p className={'home2-project-desc'}>enter your city name
                                                      to get current weather conditions in your area.</p>
                                                  </div>
                                              </Link>
                                              <Link to={'https://animations-feb82.web.app'} className={'home2-project-link'}>
                                                  <div className={'picture-box'}>
                                                      <img src={aniImage} alt={'animations website'}/>
                                                  </div>
                                                  <div className={'text-box'}>
                                                      <p className={'home2-project-title'}>Animations</p>
                                                      <p className={'home2-project-desc'}>Website where I work on
                                                      animations with CSS and Javascript</p>
                                                  </div>
                                              </Link>
                                          </div>
                                      </div>
                                  </div>
                              </section>
                          </main>
                          <footer className={'home2-footer'}>
                              <div className={'home2-footer-content'}>
                                  <div className={'left-side-footer'}>
                                      <h5>Social Media</h5>
                                      <Link to={'https://github.com/AxAnder0095'} className={'home2-footer-link'}>Github</Link>
                                      <Link to={'https://www.linkedin.com/in/alexander-brown-543337216/'} className={'home2-footer-link'}>Linkedin</Link>
                                  </div>
                                  <div className={'right-side-footer'}>
                                      <h5>Contact</h5>
                                      <p className={'home2-footer-contact'}>balexander310@yahoo.com</p>
                                      <p className={'home2-footer-contact'}>1-630-870-5787</p>
                                  </div>
                              </div>
                          </footer>
                      </div>
                  </div>
              </div>
          </div>
        </>
    )
}

export default Home2;