import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row,Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle  } from 'reactstrap';

class Page500 extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(6).fill(false),
    };
  }


  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <span className="clearfix">
                <h1 className="float-left display-3 mr-4">500</h1>
                <h4 className="pt-3">Houston, we have a problem!</h4>
                <p className="text-muted float-left">The page you are looking for is temporarily unavailable, refresh to try again or select a county.</p>
              </span>
              <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                this.toggle(0);
              }}>
                <DropdownToggle caret>
                  Counties
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem >Orange</DropdownItem>
                  <DropdownItem >Osceola</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page500;
