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
    api.rsvp(data).then((res) => { console.log(res);})
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
