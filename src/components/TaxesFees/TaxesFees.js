import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

let styles = {
  basedNum: {
    fontSize: "11px"
  }
};

export default class TaxesFees extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>
          {" "}
          Esst. taxes & fees{" "}
          <span style={styles.basedNum}>(Based on 94085)</span>
        </Col>
        <Col md={6}> {`$${this.props.taxes}`}</Col>
      </Row>
    );
  }
}
