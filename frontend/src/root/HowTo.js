import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";


export default class Home extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://cnet1.cbsistatic.com/img/UQtzeZPFtJd-8hkltyxncN0Fzx0=/980x551/2019/10/04/7b09ab6a-40d5-495b-87aa-ec131a05a416/iphone-11-pro-galaxy-note-10.jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Which Mobile</h3>
                <p>First text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://www.droid-life.com/wp-content/uploads/2020/02/Galaxy-S20-Family-2-980x551.jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://cnet4.cbsistatic.com/img/3gcqrSWycXrrL7dOhwHMyPt0ncc=/980x551/2016/08/25/8ae6fb2e-18c0-4052-b597-f7100540012f/cqth0xdwaaa2olj.jpg"
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Slight Mast</h3>
                <p>Third text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        
      </MDBContainer>
    );
  }
}
