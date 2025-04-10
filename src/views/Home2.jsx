import {Link} from "react-router-dom";
import './Home2Styles.sass'
import CI from '../imgs/187.png'


function Home2() {
    return (
        <>
          <div className={'home2-container'}>
              <div className={'home2-wrapper'}>
                  <div className={'home2-align-content'}>
                      <div className={'home2-fixed-width'}>
                          <header className={'home2-header'}>
                              <nav className={'home2-nav'}>
                                  <div className={'nav-logo'}>
                                      <p>AX</p>
                                  </div>
                                  <div className={'nav-links'}>
                                      <Link className={'nav-link'} to={'/'}>ABOUT</Link>
                                      <Link className={'nav-link'} to={'/'}>PROJECTS</Link>
                                      <Link className={'nav-link'} to={'https://github.com/AxAnder0095'}>GITHUB</Link>
                                      <Link className={'nav-link'} to={'https://www.linkedin.com/in/alexander-brown-543337216/'}>LINKEDIN</Link>
                                  </div>
                              </nav>
                          </header>
                          <main className={'home2-main'}>
                              <section className={'home2-intro-section-wrapper'}>
                                  <div className={'home2-intro-section'}>
                                      <div className={'home2-intro-info'}>
                                          <p className={'first-name'}>ALEXANDER</p>
                                          <p className={'last-name'}>BROWN</p>
                                          <p>f</p>
                                          <p>f</p>
                                      </div>
                                  </div>
                                  <div className={'home2-intro-image'}>
                                      <div className={'picture-box'}>
                                          <img src={CI} className={'img-circle'} />
                                      </div>
                                      <div>
                                          ffhhf
                                      </div>
                                  </div>
                              </section>
                          </main>
                      </div>
                  </div>
              </div>
          </div>
        </>
    )
}

export default Home2;