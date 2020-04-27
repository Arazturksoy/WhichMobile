import React, { Component } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import Products from "./Products";
import "../root/index.css";
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

export default class Brands extends Component {
  state = {
    products: [],
    brands: [],
    currentBrand: ""
  };

  async componentDidMount() {
    const url = "http://127.0.0.1:8000/api/brand/list";
    const response = await fetch(url);
    const body = await response.json();
    this.setState({ brands: body });
  }

  getProducts = currentBrand => {
    this.setState({ currentBrand: currentBrand });
    return <Products data={this.state.currentBrand} />;
  };

  showProducts() {
    return (
      <MDBContainer>
        <br></br>
        <MDBCol md="9" style={{ minHeight: "26rem" }} className="container">
          {this.state.brands.map(brand => (
            <MDBCol md="4" key={brand.id}>
              <MDBRow>
                <MDBCard narrow key={brand.id}>
                  <MDBView cascade>
                    <MDBCardImage
                      hover
                      overlay="white-slight"
                      className="card-img-top"
                      src={brand.image}
                      alt="Logo"
                    />
                  </MDBView>

                  <MDBBtn
                    color="warning"
                    onClick={() => this.props.showPage(true, brand.brand)}
                  >
                    <h6 className="white-text">
                      <MDBIcon icon="mobile" /> {brand.brand}
                    </h6>
                  </MDBBtn>
                </MDBCard>
              </MDBRow>
              <br></br>
            </MDBCol>
          ))}
        </MDBCol>
      </MDBContainer>
    );
  }

  render() {
    return <div>{this.showProducts()}</div>;
  }
}
