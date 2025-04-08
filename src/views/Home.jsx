import './HomeStyles.sass'
import Navbar from "../components/Navbar.jsx";
import {Icons} from "../Icons/Icons.jsx";
import WP from '../imgs/weatherapp.png'
import AN from '../imgs/animations.png'
import CA from '../imgs/cactpot.png'
import {Link} from "react-router-dom";
import Footer from "../components/Footer.jsx";


function Home() {
    return (

        <>

            <Navbar/>
            <div className={'home-container-wrapper'}>
                <main className={'main-home-container'}>
                    <section className={'about'}>
                        <div className={'about-wrapper'}>
                            <article className={'about-header'}>
                                <div>
                                    <p className={'about-header-title'}>About</p>
                                    <p className={'about-header-desc'}>Alexander</p>
                                </div>
                            </article>
                            <article className={'about-body'}>
                                <div className={'about-body-desc'}>
                                    <p>Hello my name is </p>
                                    <h2>Alexander Brown</h2>
                                    <p>
                                        and im an aspiring web / software developer. I recently graduated from
                                        Aurora University and am looking for an opportunity to be your next front-end
                                        engineer. Thanks for checking out my portfolio!
                                    </p>
                                </div>
                            </article>
                        </div>
                    </section>
                    <section className={'education'}>
                        <div className={'education-wrapper'}>
                            <article className={'education-header'}>
                                <div>
                                    <p className={'education-header-title'}>Education</p>
                                    <p className={'education-header-desc'}>My academic journey</p>
                                </div>
                            </article>
                            <article className={'education-body'}>
                                <div className={'education-body-desc'}>
                                    <div>
                                        <h6 className={'collage'}>Aurora University</h6>
                                        <p className={'collage-desc'}>Years attended: 2021-2023</p>
                                        <p className={'collage-desc'}>Degree: Bachelor's of Computer Science</p>
                                        <p className={'collage-desc'}>Capstone Project: Biking App</p>
                                    </div>
                                    <div>
                                        <h6 className={'collage'}>Waubonsee Community College</h6>
                                        <p className={'collage-desc'}>Years attended: 2014-2018</p>
                                        <p className={'collage-desc'}>Degree: Associate of Applied Science's</p>
                                        <p className={'collage-desc'}>Honor Roll</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                    <section className={'skills'}>
                        <div className={'skills-wrapper'}>
                            <article className={'skills-header'}>
                                <div>
                                    <p className={'skills-header-title'}>Skills</p>
                                    <p className={'skills-header-desc'}>Main framework I use is React.js</p>
                                </div>
                            </article>
                            <article className={'skills-body'}>
                                <div className={'skills-body-top'}>
                                    <div className={'skills-body-wrapper'}>
                                        <div className={'skill-icon'}>{Icons.reactIcon}</div>
                                        <p className={'skill-desc'}>React</p>
                                    </div>
                                    <div className={'skills-body-wrapper'}>
                                        <div className={'skill-icon'}>{Icons.jsIcon}</div>
                                        <p className={'skill-desc'}>Javascript</p>
                                    </div>
                                    <div className={'skills-body-wrapper'}>
                                        <div className={'skill-icon'}>{Icons.htmlIcon}</div>
                                        <p className={'skill-desc'}>HTML</p>
                                    </div>
                                    <div className={'skills-body-wrapper'}>
                                        <div className={'skill-icon'}>{Icons.cssIcon}</div>
                                        <p className={'skill-desc'}>CSS</p>
                                    </div>
                                    <div className={'skills-body-wrapper'}>
                                        <div className={'skill-icon'}>{Icons.bsIcon}</div>
                                        <p className={'skill-desc'}>Bootstrap</p>
                                    </div>
                                </div>
                                <div className={'skills-body-bottom'}>
                                    <div className={'skills-body-wrapper'}>
                                        <div className={'skill-icon'}>{Icons.javaIcon}</div>
                                        <p className={'skill-desc'}>Java</p>
                                    </div>
                                    <div className={'skills-body-wrapper'}>
                                        <div className={'skill-icon'}>{Icons.csharpIcon}</div>
                                        <p className={'skill-desc'}>C#</p>
                                    </div>
                                    <div className={'skills-body-wrapper'}>
                                        <div className={'skill-icon'}>{Icons.cplusplusIcon}</div>
                                        <p className={'skill-desc'}>C++</p>
                                    </div>
                                    <div className={'skills-body-wrapper'}>
                                        <div className={'skill-icon'}>{Icons.pythonIcon}</div>
                                        <p className={'skill-desc'}>Python</p>
                                    </div>
                                    <div className={'skills-body-wrapper'}>
                                        <div className={'skill-icon'}>{Icons.sqlIcon}</div>
                                        <p className={'skill-desc'}>SQL</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                    <section className={'projects'}>
                        <div className={'projects-wrapper'}>
                            <article className={'projects-header'}>
                                <div>
                                    <p className={'projects-header-title'}>Projects</p>
                                    <p className={'projects-header-desc'}>Project library, more on github</p>
                                </div>
                            </article>
                            <article className={'projects-body'}>
                                <div className={'projects-body-desc'}>
                                    <div className={'pt-wrapper'}>
                                        <div className={'project'}>
                                            <div>
                                                <img className={'project-image'} src={WP} alt="weather app picture" style={{width: '100%', height: '100%'}} />
                                            </div>
                                            <div>
                                                <h6 className={'project-title'}>Weather App</h6>
                                                <div className={'project-links'}>
                                                    <Link className={'project-link'} to={'https://github.com/AxAnder0095/weatherapp'}>Code</Link>
                                                    <Link className={'project-link'} to={'/'}>Demo</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'pt-wrapper'}>
                                        <div className={'project'}>
                                            <div>
                                                <img className={'project-image'} src={AN} alt="weather app picture" style={{width: '100%', height: '100%'}} />
                                            </div>
                                            <div>
                                                <h6 className={'project-title'}>Animations</h6>
                                                <div className={'project-links'}>
                                                    <Link className={'project-link'} to={'https://github.com/AxAnder0095/animations'}>Code</Link>
                                                    <Link className={'project-link'} to={'https://animations-feb82.web.app'}>Demo</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'pt-wrapper'}>
                                        <div className={'project'}>
                                            <div>
                                                <img className={'project-image'} src={CA} alt="weather app picture" style={{width: '100%', height: '100%'}} />
                                            </div>
                                            <div>
                                                <h6 className={'project-title'}>Scratch Off game</h6>
                                                <div className={'project-links'}>
                                                    <Link className={'project-link'} to={'https://github.com/AxAnder0095/Mini-Cacptot-Game'}>Code</Link>
                                                    <Link className={'project-link'} to={'https://youtu.be/VUVxc1Dpk28'}>Demo</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                </main>
            </div>
            <Footer/>
        </>
    )
}

export default Home;