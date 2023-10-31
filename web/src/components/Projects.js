import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bdd from "../assets/img/bdd_thumbnail.png";
import dribbble from "../assets/img/dribbble-ball-mark.svg";
import pix1 from "../assets/img/pix1.jpg";
import pix2 from "../assets/img/pix2.jpg";
import p2ip from "../assets/img/Cover_2.png";
import progress from "../assets/img/progress.png";
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

    const schoolProjects = [
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
                                    <Row>
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
                                            <img src={itchio} alt="itch.io logo" />
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