import styled from 'styled-components';
import { media } from './utils';
/*Constants */
export const InnerWrapper = styled.div`
  width:50%;
  margin-left:auto;
  margin-right:auto;
  margin-top:30px;
  ${ media.handheld`
    width:80%;
  ` }
`;
export const AppWrapper = styled.div`
  padding-left:5%;
  padding-right:5%;
  background-color: rgb(255, 255, 255);
  width:100%;
  height:300px;
  align:center;
  border-radius: 5px;
`;

export const DetailsDiv = styled.div`
  padding-top:2.5em;
  margin-top: .5em;
  text-align: center;
  margin-bottom:2em;
  min-height:40%;
  ${ media.handheld`
    padding-top:1em;
  ` }
`;
