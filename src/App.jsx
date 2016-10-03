import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Input, ListItem, Modal} from 'react-onsenui';
import {notification} from 'onsenui';
// import styles from './styles'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      emailAddress:'',
      password:'',
      confirmPassword:'',
      isOpen:false
    };
  }

  alertPopup() {
    notification.alert('Submit Success');
  }
  
  render(){
    return (
      <Page>
        <Button style={styles.ModalClickBtn} ref='button' onClick={() => this.setState({isOpen: true})} > CLICK HERE! 
        </Button>
        <Modal isOpen={this.state.isOpen}>

          <div style={styles.bg}>
            <div style={styles.TitleDiv}>
              <p style={styles.Title}>Join the Action Sports Network</p>
            </div>

            <div style={styles.TitleContentDiv}>
              <p style={styles.ContentTitle}> 
                Lorem ipsum dolor sit asmet, consectectur adipiscing elit. Nulla neque nibh, consequat in orci id, course auctor tortor. Fusce viverra bibendum erat, non rhoncus maris interdum in. In sit amet vehicula diam.
              </p>
            </div>
            <div style={styles.FBSignTitleDiv}>
              <p style={styles.FBSignTitle}>Join With Your Facebook Account</p>
              <p style={styles.FBSignTitle}>Or</p>
              <p style={styles.FBSignTitle}> Fill Out Ehe Form Below </p>
            </div>

            <section style={styles.TextInputBg}>
              <div style={styles.FirstTextDiv}>
                <Input style={styles.LineFirstBox}
                  value={this.state.text} float
                  onChange={(event) => { this.setState({firstName: event.target.value})}}
                  placeholder='FirstName*'/>
                <Input  style={styles.LineSecBox}
                  value={this.state.text} float
                  onChange={(event) => { this.setState({lastName: event.target.value})} }
                  placeholder='LastName*' />
              </div>
              <div style={styles.SecondTextDiv}>
                <Input style={styles.LineFirstBox}
                  value={this.state.text} float
                  onChange={(event) => { this.setState({userName: event.target.value})}}
                  placeholder='UserName*' />
                <Input style={styles.LineSecBox}
                  value={this.state.text} float
                  onChange={(event) => { this.setState({emailAddress: event.target.value})} }
                  placeholder='Email Address*' />
              </div>
              <div style={styles.ThirdTextDiv}>
                <Input style={styles.LineFirstBox}
                  value={this.state.text} float
                  onChange={(event) => { this.setState({password: event.target.value})} }
                  placeholder='Password*' />
                <Input  style={styles.LineSecBox}
                  onChange={(event) => { this.setState({confirmPassword: event.target.value})} }
                  placeholder='Confirm Password*' />
                <Button style={styles.SubmitBtn} onClick={this.alertPopup}> SUBMIT </Button>
              </div>
      
              <div style={styles.CheckBoxDiv}>
                <label>
                    <Input
                      type='checkbox'
                    />
                </label>
                <label style={styles.CheckBoxContent}>I have read and agree to the</label>
                <a href="https://onsen.io/"> terms of sevice.*</a>
              </div> 
            </section>
            
          </div>          
        </Modal>
      </Page>
    );
  }
}

const styles = ({

  ModalClickBtn:{
    marginLeft:20
  },
  bg:{
    backgroundColor:'white', 
    textAlign:'left'
  },
  TitleDiv:{
    marginTop:20, 
    marginLeft:20, 
    paddingTop:30
  },
  Title:{
    color:'black', 
    fontSize:20
  },
  TitleContentDiv:{
    marginTop:50, 
    padding:20
  },
  ContentTitle:{
    fontSize:15,
    color:'black'
  },
  TextInputBg:{
    paddingBottom:50
  },
  FBSignTitleDiv:{
    marginTop:20, 
    marginLeft:15
  },
  FBSignTitle:{
    color:'black', 
    fontSize:25
  },
  FirstTextDiv:{
    marginLeft:20, 
    marginTop:20, 
    marginBottom:10
  },
  LineFirstBox:{
    width:130, 
    backgroundColor:'#eee',
    paddingLeft:5
  },
  LineSecBox:{
    width:130, 
    backgroundColor:'#eee',
    marginLeft:15, 
    paddingLeft:5
  },
  SecondTextDiv:{
    marginLeft:20
  },
  ThirdTextDiv:{
    marginLeft:20, 
    marginTop:20
  },
  CheckBoxDiv:{
    marginLeft:20, 
    marginTop:20
  },
  CheckBoxContent:{
    marginLeft:10,
    color:'black'
  },
  SubmitBtn:{
    height:32, 
    marginLeft:15,
    marginTop:10, 
    paddingTop:0,
    backgroundColor:'#eee'
  }
});