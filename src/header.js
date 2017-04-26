import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
const StyledRow = styled(Row)`
  padding-top: 5%;
`
const StyledUl = styled.ul`
  display:block;
  padding-left:0px;
  font-family:Lato;
  font-size:12px;
  font-style:normal;
  font-weight:normal;
  height:32px;
  letter-spacing:0.4px;
  line-height:24.5px;
  list-style-type:disc;
  margin-bottom: 30px
  margin-top:15px;
`;
const StyledLi = styled.li`
  text-decoration: none;
  display: inline-block;
  padding:.8em;
  font-size:14px;
  line-height:15px;
  text-transform:uppercase;
  text-size-adjust:100%;
  cursor: pointer;
`;
const StyledH1 = styled.h1`
  text-transform: capitalize;
  font-family: Roboto, sans-serif;
  font-weight: 100;
  font-size: 72px;
  line-height: 79.2px;
  color:rgb(28, 28, 28);
  letter-spacing:1px;
  display:block
  width:100%;
`;
const StyledP = styled.p`
  letter-spacing:3px;
  line-height:17.5px;
  margin-bottom:1em;
  margin-top:7px;
  font-family:Lato;
  font-size:15px;
  text-align:center;
  text-transform:uppercase;
  text-decoration-color:rgba(28, 28, 28, 0.8);
  text-decoration-line:none;
  text-docoration-style:solid;
`;
export default function Header(props) {
  return (
    <div>
      <StyledRow>
        <Col xsHidden={true} md={4}/>
        <Col xs={18} md={4}>
          <StyledUl>
            <StyledLi onClick={() => props.changeView('details')}>Details</StyledLi>
            <StyledLi onClick={() => props.changeView('registry')}>Registry</StyledLi>
            <StyledLi onClick={() => props.changeView('rsvp')}>RSVP</StyledLi>
          </StyledUl>
        </Col>
        <Col xsHidden={true} md={4}/>
      </StyledRow>
      <StyledRow>
        <Col xsHidden={true} md={2}/>
        <Col xs={18} md={8}>
          <StyledH1>Chris & Emily </StyledH1>
        </Col>
        <Col xsHidden={true} md={2}/>
      </StyledRow>
      <StyledRow>
        <Col xsHidden={true} md={2}/>
        <Col xs={18} md={8}>
          <StyledP>
            Are getting married!
          </StyledP>
        </Col>
        <Col xsHidden={true} md={2}/>
      </StyledRow>
    </div>
  );
}
