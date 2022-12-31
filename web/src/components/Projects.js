import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp from "../assets/img/color-sharp.png";
import github from "../assets/img/github.svg";
import extLink from "../assets/img/link-alt.svg";
import esilv from "../assets/img/logo_esilv.png";

export const Projects = () => {
    const projects = [
        {
            title: "Image processing app",
            description: "C#",
            imgUrl: projImg1,
            git: "https://github.com/atinyzen/Image-processing-tool",
            link: "",
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
                        <img src=${github}/>
                    </a>
                    <a href="https://github.com/atinyzen/Image-processing-tool" target="_blank" id="github">
                        <img src=${extLink}/>
                    </a>
                </div>
            </div>
            <hr>
            <div class='modal-content'>
                <span>Short description</span>
                <br>
                <div id='content'>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro commodi sed corporis quisquam, blanditiis numquam neque? Ea, rerum suscipit, laboriosam consequuntur dicta facere, modi officiis voluptates sequi explicabo eius quaerat a dolor totam. Beatae quas, esse officiis, perspiciatis perferendis itaque repellendus dolores maiores praesentium explicabo possimus. Earum, minus incidunt? Quidem, pariatur. Ad nesciunt dolorem iste explicabo laboriosam unde dolor illo, nobis harum aperiam reiciendis, adipisci doloribus consequuntur nam provident impedit inventore facere totam. In odit beatae similique tempora id quam ipsum hic nobis! Ex aliquam atque iste doloremque provident consequatur ducimus id odio magnam deleniti, esse perferendis voluptates qui eaque! Alias error maiores quibusdam consectetur deleniti veniam impedit. Quis iure dicta incidunt quibusdam, amet in dolor expedita sunt dolorem repellendus consectetur architecto maiores illum veniam omnis cupiditate totam? Deserunt autem fuga soluta doloremque maxime ipsum harum deleniti ex eaque molestias inventore, aut aliquid similique provident quaerat quidem dolorum! Esse quod consequuntur illum asperiores fuga doloremque recusandae minima odio itaque ad deserunt sint quisquam deleniti voluptate sed iure a nobis modi, ipsam at? Ratione, quidem atque suscipit quaerat asperiores aliquam earum numquam sunt vero explicabo porro, distinctio at eos saepe vitae omnis magnam accusantium dolorum, blanditiis aperiam facilis nulla totam! Labore laudantium, inventore exercitationem odit hic, incidunt quam culpa atque enim voluptatem dicta nesciunt laborum eius corrupti fuga ullam officiis repudiandae unde perspiciatis, vero dolore. Impedit doloribus ratione delectus soluta nesciunt consectetur eos, vitae consequatur deleniti quidem fugiat, ab molestiae, ipsum voluptas tempora repudiandae enim esse optio placeat velit vero ad. Veritatis facilis corporis ducimus magnam nesciunt obcaecati et dignissimos quo aliquam recusandae sit harum, aliquid explicabo! Magni natus impedit odio sequi. Reprehenderit harum assumenda non aliquid, fuga commodi accusantium nostrum laboriosam libero, corporis tempore eligendi temporibus amet vitae rem dicta odit cupiditate ipsa, vel aliquam sapiente dolorum nulla. Blanditiis nesciunt ea vero eius molestias delectus, omnis quis dolorum possimus, id tempore non animi. Optio, fuga sapiente. Sit error dolorem vero repellendus, ex quaerat maxime, necessitatibus dicta, voluptatum illum tempore culpa! Doloribus repudiandae facilis quia fugiat impedit. Facere, tempore laudantium veritatis laboriosam animi sed asperiores debitis quod, nostrum ipsa totam voluptates deserunt! Minima beatae quam neque cum voluptatum atque, iusto cumque amet quia culpa deleniti aspernatur cupiditate quisquam consectetur totam pariatur ut quod, inventore consequuntur rerum debitis eligendi quo repellendus! Praesentium aliquid laudantium aspernatur! Recusandae eos minus consectetur beatae tempora vitae earum, voluptatum laboriosam, impedit sed ab, praesentium suscipit porro quam quidem blanditiis. Possimus consectetur neque at facilis nobis maxime sunt cum dolores animi distinctio. Possimus repellendus perferendis minima temporibus molestiae sunt assumenda, impedit natus quos obcaecati voluptates magnam in vero voluptatum, nam aliquam facere beatae deleniti odio placeat. Libero eveniet, vero tenetur consequatur quo doloribus dolorum repudiandae quas numquam amet nihil cumque hic id sed nesciunt aperiam dignissimos veritatis unde tempora aliquam earum, corrupti beatae nemo? Earum accusantium adipisci eaque officia temporibus minima excepturi sapiente repudiandae in similique molestias enim optio itaque sit dolore consequuntur expedita, dicta numquam autem dolores aliquam? Placeat saepe maxime ipsam eius quaerat laudantium incidunt explicabo voluptatem enim corrupti nulla nesciunt fuga laborum ducimus maiores amet obcaecati, dolores nisi? Dolore aliquid, dolorum repellendus velit consequuntur distinctio. Voluptatum nemo maxime totam ad molestiae ratione, minus inventore et dolor? Dolorem amet optio quidem aliquam ipsum possimus iusto commodi assumenda facere perferendis inventore et numquam laudantium, dolores quas veritatis, deserunt praesentium consequatur quo? Corrupti, ipsum facilis ipsam, soluta ut velit veritatis expedita culpa repudiandae est porro quasi, doloribus blanditiis aliquid illum recusandae provident quae iusto error? Velit natus quas autem sunt vel cum error eveniet ipsam, nisi temporibus placeat iusto recusandae molestiae provident itaque dolorem voluptas aliquam veritatis officiis dolores rerum consequuntur perspiciatis nesciunt! Consequuntur mollitia, obcaecati optio minima, nisi culpa facere excepturi a doloremque consequatur dicta nam. Beatae cupiditate commodi vero, reiciendis rerum aliquid nostrum architecto unde assumenda placeat, officiis velit dolorem. Commodi officia reprehenderit ipsa deleniti quibusdam rerum numquam aperiam, quos placeat, quis sequi optio. Quis quibusdam alias veritatis blanditiis numquam, reiciendis repellendus odit architecto iure exercitationem facilis quo. Pariatur qui modi tenetur nisi at mollitia consectetur impedit earum quia nam? Aliquam impedit, ex necessitatibus, qui optio itaque natus labore ea at alias dignissimos dolorum nesciunt consectetur exercitationem magnam ab dicta voluptatum debitis quod. Atque ut, molestias iure deleniti nostrum nesciunt libero, eaque iste aliquam laudantium recusandae. Dolore hic eveniet deserunt iste rem, quaerat soluta itaque qui molestiae aspernatur illum laboriosam corrupti veritatis, earum id reprehenderit reiciendis sapiente repudiandae porro esse. Quidem recusandae dolore, exercitationem temporibus alias sed architecto deleniti earum itaque, aliquam porro perspiciatis quisquam magni voluptatum eligendi esse ab dicta in! Nisi at exercitationem doloribus, delectus fugit officia velit sit alias dolorum mollitia. Similique accusantium consequatur corrupti dolores, voluptatum velit. Nobis explicabo totam odit. Reprehenderit sunt ipsum officiis voluptatum, quia iusto voluptates, quis dignissimos eligendi error modi sed vero quasi exercitationem quam, nostrum illo similique. Architecto quibusdam dolores nesciunt nobis laborum? Atque, omnis. Corporis adipisci expedita ratione laudantium suscipit quibusdam dolore! Dolorum odio illo natus quo unde accusantium animi quaerat pariatur amet blanditiis ullam rem aliquam ut harum dolores, repellendus eius perspiciatis dolore illum distinctio autem earum in quibusdam veniam. Quibusdam pariatur veniam iusto quisquam vitae obcaecati non minus eius, ipsa nam ad nobis libero provident dignissimos cum voluptatem accusantium quo soluta fugit neque id cumque? Tempore exercitationem possimus soluta quasi vel ad cum veniam repellendus obcaecati numquam unde corporis recusandae ratione cupiditate, ut consequuntur vitae totam, nam dolore, consectetur reiciendis rerum. Molestiae, maxime! Sint pariatur, laboriosam provident eos minima architecto doloremque nulla hic. Mollitia at iure repudiandae provident modi sunt vel quis error quae accusamus rerum a tempore ex, optio natus iusto asperiores quam excepturi itaque debitis dolores! Dolor animi iste iusto officia vero, voluptatum quibusdam distinctio asperiores repellendus eligendi sit dignissimos nulla praesentium, eius qui incidunt! Aperiam voluptate molestias quam sed sequi, inventore tenetur amet? Dolores unde recusandae quasi iste explicabo enim quam labore repellendus officia consectetur alias, repellat suscipit eum, ducimus aut optio. Cum, sequi enim eveniet, veniam totam esse praesentium fugiat officia possimus deserunt amet in. Ex deleniti rerum et soluta?
                    </p>
                </div>
            </div>
            `
        },
        {
            title: "Scrabble",
            description: "C#",
            imgUrl: projImg1,
            git: "",
            link: "",
            article: `
            `
        },
        {
            title: "Prison Break",
            description: "Python",
            imgUrl: projImg1,
            git: "",
            link: "",
            article: `
            `
        }
    ];

    const schoolProjects = [
        {
            title: "PIX2",
            description: "",
            imgUrl: projImg1,
            git: "",
            link: "https://www.esilv.fr/formations/projets/projet-dimagination-et-dexploration-2/",
            article: `
            `
        },
        {
            title: "PIX1 - Leowind",
            description: "",
            imgUrl: projImg1,
            git: "",
            link: "https://www.esilv.fr/formations/projets/projet-dimagination-et-dexploration-1/",
            article: `
            `
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Softwares</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">School Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" disabled>Tab Three</Nav.Link>
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
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}