import React, { Component } from "react";
import { Jumbotron,  Accordion, Card, Container, Nav } from "react-bootstrap";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";


export default class About extends Component {
  showAbout() {
    return(
      <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>About Us</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              className="img-fluid"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                Yasin Çalışkan
              </MDBCardTitle>
              <MDBCardText>
              Hi! I'm Yasin Çalışkan. I'm 4th grade computer engineering  student. I like work on Web Technologies. I can develop project with Django/Django Rest Framework and HTML&CSS, Javascript, JQuery, ReactJS.
              </MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="https://www.linkedin.com/in/yasincaliskan26/"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="https://www.github.com/yasincaliskan/"><MDBIcon
                    fab
                    icon="github"
                    className="grey-text"
                    size="lg"
                  /></a>
                  
                </MDBCol>
              </MDBCol><hr></hr>

              <MDBCardTitle className="indigo-text h5 m-4">
                Araz Babayev
              </MDBCardTitle>
              <MDBCardText>
                Açıklama
              </MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="asd"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="https://www.github.com/yasincaliskan/"><MDBIcon
                    fab
                    icon="github"
                    className="grey-text"
                    size="lg"
                  /></a>
                  
                </MDBCol>
              </MDBCol>

            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
  }

  show(){
    return(
      <Container>
        <Jumbotron>
          <h1>Which Mobile'dan merhaba!</h1>
          <p>Bize destek ol.</p>
         
        </Jumbotron>

        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Yasin Çalışkan
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <Nav.Link href="https://www.linkedin.com/in/yasincaliskan26/">Linkedin</Nav.Link>
              <Nav.Link href="https://www.github.com/yasincaliskan/">Github</Nav.Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Araz Babayev
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Araz ...</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    )
  }
  render() {
    return (<div>
      {this.showAbout()}</div>
    );
  }
}
