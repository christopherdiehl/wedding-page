import React, { Component } from 'react';
import './App.css';
import Header from './header';
import { Collapse, Button, Checkbox } from 'react-bootstrap';
import FieldGroup from './fieldGroup';
import MyAlert from './alert';
import { InnerWrapper, AppWrapper, DetailsDiv } from './constants';
import api from './api';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'details',
      attending: false,
      guest: '',
      plusone: '',
      showAlert: false,
      error: false,
      alertText: ""
    }
  }
  changeView = (view) => {
    this.setState({
      view: view
    });
  }
  _onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }
  _onSubmit = () => {
    const data ={
      guest: this.state.guest,
      attending: this.state.attending,
      plusone: this.state.plusone
    };
    api.rsvp(data).then((res) => {
      if (res.status !== 200) {
        this.setState({
          error: true,
          alertText: "An error occured. Please try again later",
          showAlert: true
        });
      } else {
        this.setState({
          showAlert: true,
          error: false,
          alertText: "Thank you for filling out this form. We hope to see you soon!"
        });
      }
    });
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
                  <p>On a more serious note, we would like to thank you for joining us on our special day.
                    Due to our circumstances in life, we have already purchased the vast majority of traditional wedding gifts.
                    Because of this, we would appreciate if you would give money instead.
                    <br /> Thanks!
                  </p>
                </DetailsDiv>
              </div>
            </Collapse>
            <Collapse in={this.state.view === 'rsvp'} >
              <div>
                <MyAlert
                  text={this.state.alertText}
                  visible={this.state.showAlert}
                  bsStyle={this.state.error ? 'danger' : 'success'}
                  handleDismiss={() => {this.setState({ showAlert : false})}}
                />
                <div className="details-div">
                  <h4>Thanks for RSVPing. <br /> We are looking forward to spending our special day with you!</h4>
                  <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Your name"
                    placeholder="Enter your name"
                    name="guest"
                    onChange={this._onChange}
                  />
                  <FieldGroup
                    id="formControlsEmail"
                    type="text"
                    label="Your plus one's name"
                    placeholder="Enter your plus one's name"
                    onChange={this._onChange}
                    name="plusone"
                  />
                  <Checkbox
                    name="attending"
                    onChange={(e) => { this.setState({[e.target.name]: e.target.checked}) }}
                    >I'm attending</Checkbox>
                  <Button bsStyle="primary" onClick={this._onSubmit} bsSize="large" block>Submit</Button>
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
