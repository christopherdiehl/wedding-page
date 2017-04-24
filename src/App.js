import React, { Component } from 'react';
import './App.css';
import Header from './header';
import { Collapse, Button } from 'react-bootstrap';
import FieldGroup from './fieldGroup';
import MyAlert from './alert';
import { InnerWrapper, AppWrapper, DetailsDiv } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'details'
    }
  }
  changeView = (view) => {
    this.setState({
      view: view
    });
  }
  _onSubmit = () => {
    this.setState({ alert: true});
  }
  render() {
    return (
      <div className="App" id="snow">
        <div className="App-header">
          <Header changeView={this.changeView}/>
        </div>
        <InnerWrapper>
          <AppWrapper>
            <Collapse in={this.state.view === 'details'} >
              <div>
                <DetailsDiv>
                  <h1>Our wedding will take place on December 28, 2017</h1>
                  <p>At Mcloon's Pierhouse <br/>
                     1 Ocean Ave, Long Branch, NJ 07740<br/>
                     (732) 923-1006
                  </p>
                  <p>
                    RECEPTION 6:00
                  </p>
                </DetailsDiv>
              </div>
            </Collapse>
            <Collapse in={this.state.view === 'registry'} >
              <div>
                <DetailsDiv>
                  <h1>Please send us that skrilla!</h1>
                </DetailsDiv>
              </div>
            </Collapse>
            <Collapse in={this.state.view === 'rsvp'} >
              <div>
                <MyAlert
                  text={'Thank you for filling out this form. We hope to see you soon!'}
                  visible={this.state.showAlert}
                  handleDismiss={() => {this.setState({ showAlert : false})}}
                />
                <div className="details-div">
                  <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Your name"
                    placeholder="Enter your name"
                  />
                  <FieldGroup
                    id="formControlsEmail"
                    type="text"
                    label="Plus one"
                    placeholder="Enter guests name"
                  />
                  <Button bsStyle="primary" onClick={()=>{this.setState({showAlert: true })}} bsSize="large" block>Submit</Button>
                </div>
              </div>
            </Collapse>
          </AppWrapper>
        </InnerWrapper>
      </div>
    );
  }
}

export default App;
