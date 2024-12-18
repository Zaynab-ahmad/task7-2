import React from 'react';
import Title from "../Title/Title";
import RoundedButton from "../Button/RoundedButton/RoundedButton";
import { Col, Row } from 'react-bootstrap';

export default function AboutTitle() {
  return (
    <Row className="exContainer my-3">
      <Col xs={12} md={6} className="teamMembersTitle">
        <Title title="Team Members" heading="Our Dedicated Team Members" />
      </Col>
      <Col xs={12} md={6} className="teamMembersButton ">
        <RoundedButton
          bgColor="var(--primary-color)"
          textColor="white"
          text="All Members"
        />
      </Col>
    </Row>
  );
}
