import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Input, ListItem, Text} from 'react-onsenui';
import {notification} from 'onsenui';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      emailAddress:'',
      password:'',
      confirmPassword: ''
    };
  }

  alertPopup() {
    notification.alert('success submit!!!');
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div style={{marginTop:20, marginLeft:20}}>Join the Action Sports Network</div>
        <div style={{marginTop:20, marginLeft:20}}>Lorem ipsum dolor sit asmet, consectectur adipiscing elit.</div>
        <div style={{marginTop:20, marginLeft:15}}>Join With Your Facebook Account</div>
        <div style={{marginTop:20, marginLeft:15}}>Or</div>
        <div style={{marginTop:20, marginLeft:15}}>Fill Out Ehe Form Below....</div>
        
          <div >
            <Input
              value={this.state.text} float
              onChange={(event) => { this.setState({firstName: event.target.value})} }
              placeholder='FirstName*' />
            <Input
              value={this.state.text} float
              onChange={(event) => { this.setState({lastName: event.target.value})} }
              placeholder='LastName*' />
          </div>
          <div>
            <Input
              value={this.state.text} float
              onChange={(event) => { this.setState({userName: event.target.value})} }
              placeholder='UserName*' />
            <Input
              value={this.state.text} float
              onChange={(event) => { this.setState({emailAddress: event.target.value})} }
              placeholder='Email Address*' />
          </div>
          <div>
            <Input
              value={this.state.text} float
              onChange={(event) => { this.setState({password: event.target.value})} }
              placeholder='Password*' />
            <Input
              value={this.state.text} float
              onChange={(event) => { this.setState({confirmPassword: event.target.value})} }
              placeholder='Confirm Password*' />
            <Button onClick={this.alertPopup}> SUBMIT </Button>
          </div>

          <div style={{flexDirection:'row', flex:1}}>
            <div>
              <label>
                <Input
                  type='checkbox'
                />
              </label>
            </div>
            <div>Fill Out Ehe Form Below........</div>
            <div>Fill Out Ehe Form Below....</div>
          </div>
        
      </Page>
    );
  }

}