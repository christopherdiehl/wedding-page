import React from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
import { media } from './utils';

const MyStyledAlert = styled(Alert)`
  position: fixed;
  bottom: 10%;
  right: 1%;
  z-index: 50;
  width: 20%;
  ${ media.handheld`
    width:60%;
  ` }
`;

export default function MyAlert(props) {
  if (props.visible) {
    return (
      <MyStyledAlert bsStyle={props.bsStyle || 'success'} onDismiss={props.handleDismiss}>
        {props.text}
      </MyStyledAlert>
    );
  }
  return <div />;
}

MyAlert.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  text: React.PropTypes.string.isRequired,
  handleDismiss: React.PropTypes.func.isRequired,
}
