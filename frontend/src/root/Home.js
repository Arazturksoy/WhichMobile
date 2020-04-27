import React, { Component } from "react";
import {
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
  MDBJumbotron,
  MDBBtn
} from "mdbreact";

export default class Home extends Component {
  render() {
    return (
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="text-center">
              <MDBCardImage
                src="https://simtelmobile.com/wp-content/uploads/2018/09/banner-top-2018.jpg"
                className="img-fluid"
              />
              <MDBCardBody>
                <MDBCardText></MDBCardText>
                <MDBCardText></MDBCardText>
                <section className="my-5">
                  <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Which Mobile
                  </h2>
                  <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                  Which Mobile displays the Natural Language Processing results by scanning tweets for the phone you are looking for.
                  </p>

                  <MDBRow>
                    <MDBCol md="4" className="md-0 mb-5">
                      <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                          <MDBIcon
                            icon="bullhorn"
                            size="2x"
                            className="blue-text"
                          />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                          <h4 className="font-weight-bold">Products</h4>
                          <p className="grey-text">
                            Many Brands and Products! You can find the phone you
                            want.
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md="4" className="md-0 mb-5">
                      <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                          <MDBIcon
                            icon="cogs"
                            size="2x"
                            className="pink-text"
                          />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                          <h4 className="font-weight-bold">Features</h4>
                          <p className="grey-text">
                            Scores based on "Design, Battery, Camera" features.
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md="4" className="md-0 mb-5">
                      <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                          <MDBIcon
                            icon="tachometer-alt"
                            size="2x"
                            className="purple-text"
                          />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                          <h4 className="font-weight-bold">Contact Us</h4>
                          <p className="grey-text">
                          We are open to your ideas. Please contact us!
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                  <MDBBtn href="/phones" color="green" size="10">
                Let's Find!
              </MDBBtn>
                </section>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
