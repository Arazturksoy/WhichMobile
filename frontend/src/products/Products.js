import React, { Component } from "react";
import "../root/index.css";
import {
  Card,
  ListGroup,
  Col,
  Container
} from "react-bootstrap";
import Tweets from "./Tweets";
import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCol,
  MDBView,
  MDBIcon,
  MDBContainer,
  MDBRow
} from "mdbreact";

export default class Products extends Component {
  state = {
    products: [],
    product: [],
    detail: false,
    tweets: []
  };

  async componentDidMount() {
    const url = "http://127.0.0.1:8000/api/post/list";
    const response = await fetch(url);
    const body = await response.json();
    this.setState({ products: body });
  }

  goDetail = product => {
    this.setState({ product: product });
    this.setState({ detail: true });
  };

  showProduct() {
    return (
      <MDBContainer>
        <br></br>
        <MDBCol md="9" style={{ minHeight: "26rem" }} className="container">
          {this.state.products.map(product =>
            this.props.currentBrand === product.brand ? (
              <MDBCol md="4" key={product.id}>
                <MDBRow>
                  <MDBCard narrow key={product.id}>
                    <MDBView cascade>
                      <MDBCardImage
                        hover
                        overlay="white-slight"
                        className="card-img-top"
                        src={product.image}
                        alt="Logo"
                      />
                    </MDBView>

                    <MDBBtn
                      color="warning"
                      onClick={() => this.goDetail(product)}
                    >
                      <h6 className="white-text">
                        <MDBIcon icon="mobile" /> {product.model}
                      </h6>
                    </MDBBtn>
                  </MDBCard>
                </MDBRow>
                <br></br>
              </MDBCol>
            ) : null
          )}
        </MDBCol>
      </MDBContainer>
    );
  }

  showDetails() {
    return (
      <Container fluid={true}>
        <Col xs="9">
          <br></br>
          <Card>
            <Card.Header as="h5">{this.state.product.model}</Card.Header>
            <br></br>
            <Card.Img
              variant="top"
              src={this.state.product.image}
              style={{ width: 200, height: 200 }}
            />
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Score: {this.state.product.score}
                </ListGroup.Item>
                
              </ListGroup>
            </Card.Body>
          </Card>
          <br></br>
          <Tweets model={this.state.product.model} />
        </Col>
      </Container>
    );
  }

  render() {
    return (
      <div>
        {this.state.detail === false ? this.showProduct() : this.showDetails()}
      </div>
    );
  }
}
