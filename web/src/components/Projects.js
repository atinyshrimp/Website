import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bdd from "../assets/img/bdd_thumbnail.png";
import dribbble from "../assets/img/dribbble-ball-mark.svg";
import pix1 from "../assets/img/pix1.jpg";
import pix2 from "../assets/img/pix2.jpg";
import p2ip from "../assets/img/Cover_2.png";
import progress from "../assets/img/progress.png";
import api_proj from "../assets/img/api_prediction.png"
import img_app from "../assets/img/bmp_app.png";
import scrabble from "../assets/img/scrabble_img1.png";
import prison_break from "../assets/img/prison-break1.png";
import coverCatSim from "../assets/img/catsim_thumbnail.png";
import coverColorPool from "../assets/img/colorpool_cover.png";
import github from "../assets/img/github.svg";
import extLink from "../assets/img/link-alt.svg";
import itchio from "../assets/img/itchio-textless-white.svg";
import esilv from "../assets/img/logo_esilv.png";
import unity from "../assets/img/U_ProfileIcon_Alpha_Negative_500x500.png";

export const Projects = () => {
    const projects = [
        {
            title: "Database management app",
            description: "C#",
            imgUrl: bdd,
            git: "https://github.com/atinyzen/BDD-Projet-BelleFleur",
            link: "",
            article_enabled: true,
            article:`
            <div class='modal-header'>
                <div class='basic-info'>
                    <a href="https://esilv.fr" target="_blank">    
                        <img src=${esilv} />
                    </a>
                    <h4>Database management app</h4>
                </div>
                <div class='link-icons'>
                    <a href="https://github.com/atinyzen/BDD-Projet-BelleFleur" target="_blank" id="github">
                        <img src=${github} />
                    </a>
                </div>
            </div>
            <hr>
            <div class='modal-content'>
                <i id='description'>
                    A project made to allow a flower shop owner to manage their clients, their storage, and more.
                </i>
                <br>
                <div id='content'>
                    <p>
                        <center>Everything you need to know is on the project's Github page :)<br>
                        It is written in French, feel free to use a translator if needed!</center>
                    </p>
                </div>
            </div>
            `
        },
        {
            title: "Image processing app",
            description: "C#",
            imgUrl: img_app,
            git: "https://github.com/atinyzen/Image-processing-tool",
            link: "",
            article_enabled: true,
            article:`
            <div class='modal-header'>
                <div class='basic-info'>
                    <a href="https://esilv.fr" target="_blank">    
                        <img src=${esilv} />
                    </a>
                    <h4>Image processing app</h4>
                </div>
                <div class='link-icons'>
                    <a href="https://github.com/atinyzen/Image-processing-tool" target="_blank" id="github">
                        <img src=${github} />
                    </a>
                </div>
            </div>
            <hr>
            <div class='modal-content'>
                <i id='description'>
                    A project able to apply filters, convolution matrices to Bitmap images, and more.
                </i>
                <br>
                <div id='content'>
                    <p>
                        <center>Everything you need to know is on the project's Github page :)</center>
                    </p>
                </div>
            </div>
            `
        },
        {
            title: "Scrabble",
            description: "C#",
            imgUrl: scrabble,
            git: "",
            link: "",
            article_enabled: false,
            article: `
            <div class='modal-header'>
                <div class='basic-info'>
                    <a href="https://esilv.fr" target="_blank">    
                        <img src=${esilv} />
                    </a>
                    <h4>Scrabble</h4>
                </div>
                <div class='link-icons'>
                </div>
            </div>
            <hr>
            <div class='modal-content'>
                <i id='description'>
                    A simple & rudimentary reproduction of the well-known Scrabble board game<br>
                    A project serving as an end of semester evaluation at school
                </i>
                <br>
                <div id='content'>
                    <p>
                    </p>
                </div>
            </div>
            `
        },
        {
            title: "Prison Break",
            description: "Python",
            imgUrl: prison_break,
            git: "",
            link: "",
            article_enabled: true,
            article: `
            <div class='modal-header'>
                <div class='basic-info'>
                    <h4>Prison Break</h4>
                </div>
                <div class='link-icons'>
                </div>
            </div>
            <hr>
            <div class='modal-content'>
                <i id='description'>
                    A carceral point & click game made with Python<br>
                    A project serving as an end of semester evaluation at school
                </i>
                <br>
                <div id='content'>
                    <p>
                    </p>
                </div>
            </div>
            `
        }
    ];

    /* 16:9 ratio for thumbnails */
    const schoolProjects = [
        {
            title: "Classification Prediction",
            description: "Data Analysis, Machine Learning",
            imgUrl: api_proj,
            git: "https://github.com/atinyzen/Data-Analysis-Project",
            link: "",
            article_enabled: true,
            article: `
                <div class='modal-header'>
                <div class='basic-info'>
                    <a href="https://esilv.fr/en" target="_blank">    
                        <img src=${esilv} />
                    </a>
                    <h4>Avila Bible Classification Prediction</h4>
                </div>
                <div class='link-icons'>
                    <a href="https://github.com/atinyzen/Data-Analysis-Project" target="_blank" id="github">
                        <img src=${github} />
                    </a>
                </div>
            </div>
            <hr>
            <div class='modal-content'>
                <i id='description'>
                    Goal: train a model from a specified dataset, use it to make predictions & transform it into an API
                    <br>
                    <bold>Used technologies: </bold> Python (scikit-learn, pandas, plotly, Panel), Flask
                </i>
                <br>
                <div id='content'>
                </div>
            </div>
            `
        },
        {
            title: "P2IP",
            description: "Start-Up project",
            imgUrl: p2ip,
            git: "",
            link: "https://www.esilv.fr/en/student-projects",
            article_enabled: true,
            article: `
            <div class='modal-header'>
                <div class='basic-info'>
                    <a href="https://esilv.fr/en" target="_blank">    
                        <img src=${esilv} />
                    </a>
                    <h4>P2IP - book exchange app</h4>
                </div>
                <div class='link-icons'>
                    <a href="https://dribbble.com/shots/21626313-Book-exchange-mobile-app-Agora" target="_blank">
                        <img src=${dribbble} />
                    </a>
                    <a href="https://www.esilv.fr/en/student-projects" target="_blank">
                        <img src=${extLink} />
                    </a>
                </div>
            </div>
            <hr>
            <div class='modal-content'>
                <i id='description'>
                    Goal: build a hypothetical start-up while considering positive impact on the environment<br>
                    <bold>Used technologies: </bold> Canva, DaVinci Resolve 18, Figma, PowerPoint
                    <br>
                </i>
                <br>
                <div id='content'>
                    <p>
                        My tasks consisted of the following (in chronological order):
                        <ul>
                            <li>Edited a 1-minute video pitch</li>
                            <li>Designed a mobile app prototype (the case study is available on Dribbble, see link above)</li>
                            <li>Edited a 5-minute end-of-project video</li>
                            <li>Edited a 2-minute advertising video to promote our project</li>
                        </ul>
                        The required <bold>deliverables</bold>:
                        <ul>
                            <li>Lean canvas as a business model</li>
                            <li>The videos mentioned above</li>
                            <li>Advertising visuals (one used as the thumbnail, the other one used at the end of the ad video)</li>
                            <li>A report summarizing all that we had done during six months within 15 pages</li>
                            <li>A 1-page summary of our project</li>
                        </ul>
                    </p>
                </div>
            </div>
            `
        },
        {
            title: "PIX2",
            description: "Team Management",
            imgUrl: pix2,
            git: "",
            link: "https://www.esilv.fr/en/student-projects",
            article_enabled: true,
            article: `
            <div class='modal-header'>
                <div class='basic-info'>
                    <a href="https://esilv.fr/en" target="_blank">    
                        <img src=${esilv} />
                    </a>
                    <h4>PIX2</h4>
                </div>
                <div class='link-icons'>
                    <a href="https://www.esilv.fr/en/student-projects" target="_blank" id="github">
                        <img src=${extLink} />
                    </a>
                </div>
            </div>
            <hr>
            <div class='modal-content'>
                <i id='description'>
                    Goal: present an object which movements are automated & able to mechanically produce sounds<br>
                    A project to build as the project manager (MOE) & an other to manage as the contracting authority (MOA)
                    <br>
                    <bold>Used technologies: </bold> Arduino, Canva, SolidWorks
                </i>
                <br>
                <div id='content'>
                    <p>
                        I worked with a 5 person team to complete this project.<br>
                        The 1st semester was focused on thinking of a sustainable idea that could be passed on another team whose task would be to build it, and we would build theirs.<br>
                        The 2nd semester was focused on the communication between the two teams, fundamental to properly build each other's projects.<br>
                        This time, I also was in charge of the organization more than any other aspect in the project.
                        <br><br>
                        The deliverables of this project were:
                        <ul>
                            <li>A user's guide</li>
                            <li>Promoting poster</li>
                            <li>Promoting video</li>
                        </ul>
                    </p>
                </div>
            </div>
            `
        },
        {
            title: "PIX1",
            description: "Team Management",
            imgUrl: pix1,
            git: "",
            link: "https://www.esilv.fr/en/student-projects",
            article_enabled: true,
            article: `
            <div class='modal-header'>
                <div class='basic-info'>
                    <a href="https://esilv.fr/en" target="_blank">    
                        <img src=${esilv} />
                    </a>
                    <h4>PIX1 - LeoWind</h4>
                </div>
                <div class='link-icons'>
                    <a href="https://www.esilv.fr/en/student-projects" target="_blank">
                        <img src=${extLink} />
                    </a>
                </div>
            </div>
            <hr>
            <div class='modal-content'>
                <i id='description'>
                    Goal: design a miniature wind turbine from recycled materials as well as respecting given specifications<br>
                    <bold>Used technologies: </bold> SolidWorks
                    <br>
                </i>
                <br>
                <div id='content'>
                    <p>
                        I worked with a 6 person team on creating a mini turbine from scratch. This project is made to allow us students to review and apply concepts viewed during the school year.<br>
                        So we had to do all the calculations prior to starting to model on <span>SolidWorks</span>, which I took a part in as I modeled several parts of the final turbine.
                        <br>
                        My main job was to organize the team's tasks and schedules and keep track of the different deadlines (meetings with professors, etc.)
                        <br><br>
                        When the 2nd semester started, the remaining focus was to recreate the operation of an alternator in order to make the turbine work (application of our Physics classes)
                        <br><br>
                        The specifications were the following:
                        <ul>
                            <li>The wind turbine must be removable and must be able to be stored in its entirety in a rectangular box of dimensions 30 x 21.5 x 29 cm</li>
                            <li>The weight of the box with the entire wind turbine inside must be between 0.5 kg and 1 kg</li>
                        </ul>
                        And several materials were forbidden to use, such as metal, pieces from existing devices/games and more.
                    </p>
                </div>
            </div>
            `
        }
    ];

    const games = [
        {
            title: "CatSim",
            description: "A simple pet simulator",
            imgUrl: coverCatSim,
            git: "https://github.com/atinyzen/Programmer-Theory-Repo",
            link: "https://play.unity.com/p/63fb8d6caf7eae04a34e6471",
            article_enabled: true,
            article: `
            <div class='modal-header'>
                <div class='basic-info'>
                    <a href="https://play.unity.com/u/lianajoycemarie" target="_blank">    
                        <img src=${unity} />
                    </a>
                    <h4>CatSim</h4>
                </div>
                <div class='link-icons'>
                    <a href="https://github.com/atinyzen/Programmer-Theory-Repo" target="_blank" id="github">
                        <img src=${github} />
                    </a>
                    <a href="https://play.unity.com/p/63fb8d6caf7eae04a34e6471" target="_blank" id="github">
                        <img src=${extLink} />
                    </a>
                </div>
            </div>
            <hr>
            <div class='modal-content'>
                <i id='description'>
                    Goal: build a game using OOP concepts and submit it
                    <br>
                    <bold>Used technologies: </bold> Unity3D, Unity Asset Store, C#
                </i>
                <br>
                <div id='content'>
                    <p>
                        <center>All info about this game is available on Unity Play</center>
                    </p>
                </div>
            </div>
            ` 
        },
        {
            title: "Color Pool",
            description: "Unity3D",
            imgUrl: coverColorPool,
            git: "",
            link: "https://atinyzen.itch.io/color-pool",
            article_enabled: true,
            article: `
            <div class='modal-header'>
                <div class='basic-info'>
                    <a href="https://atinyzen.itch.io/" target="_blank">    
                        <img src=${itchio} />
                    </a>
                    <h4>Color Pool</h4>
                </div>
                <div class='link-icons'>
                    <a href="https://atinyzen.itch.io/color-pool" target="_blank">
                        <img src=${extLink} />
                    </a>
                </div>
            </div>
            <hr>
            <div class='modal-content'>
                <i id='description'>
                    Goal: build a prototype that has to be counting something and display that counting on screen with UI
                    <br>
                    <bold>Used technologies: </bold> Unity3D, C#
                </i>
                <br>
                <div id='content'>
                    <p>
                        <center>All info about this game is available on itch.io</center>
                    </p>
                </div>
            </div>
            `
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Click on the title of the project to get more insight on it</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Softwares</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">School Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Games</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row>
                                        {
                                            schoolProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>

                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row id="game_section">
                                        {
                                            games.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                    <div id="info">
                                        <a href="https://atinyzen.itch.io/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="235.452" width="261.728" viewBox="0 0 245.37069 220.73612"><path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z" color="#000" fill="#fff"/></svg>
                                            <div>The games are available here !</div>
                                        </a>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}