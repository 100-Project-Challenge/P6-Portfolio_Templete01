import React from 'react'
import { Row, Tab, Container, Col, Nav } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen';



function Projects() {

  const projects = [{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
  ]

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 'animate__animated animate__bounce' : ''}>

                  <h2>Projects</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi praesentium est, nulla optio quas ab cupiditate possimus voluptatibus consectetur consequatur ratione, eveniet blanditiis soluta dolore magni voluptas sunt sapiente numquam!</p>
                </div>}
            </TrackVisibility>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Tob One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" >
                    Tab 3
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {
                      projects.map((project, index) => { return (<ProjectCard key={index} {...project} />) })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'> lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey='third'>loren Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt="colorSharp2" />
    </section>
  )
}

export default Projects