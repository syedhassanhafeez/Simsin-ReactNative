import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Thumbnail,
  Text,
  View,
  Icon,
  Item,
  Input,
  Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hidePassword: true,
    };
  }

  // login = async (email, password) => {
  //   const res = await axios.post(
  //     'http://test.arwaj.com.pk:8085/sims_in/api/login',
  //     { email, password },
  //   ).catch((res) => {
  //     return { status: 401, message: 'Unauthorized' }
  //   })
  userLogin = () => {
    console.log("In userlogin === ", this.state)
    var email = this.state.username;
    var password = this.state.password;
    if (email && password) { // if validation fails, value will be null
      fetch("http://test.arwaj.com.pk:8085/sims_in/api/login ", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          password: password,
        })
      }).then((response) =>{
        console.log("response === ", response)
      }).catch(ex => {
        console.log("ex === ", ex)
      })
    }}
    

  handleHidePassword() {
    console.log('Hi');
    this.setState(state => {
      return {
        ...state,
        hidePassword: !this.state.hidePassword,
      };
    });
  }

  handleEmail = (value) => {
    this.setState({email: value})
  }

  handlePassword = (value) => {
    this.setState({password: value})
  }

  render() {
    const uri =
      'https://facebook.github.io/react-native/docs/assets/favicon.png';
    return (
      //   <Container backgroundColor="black">
      // {/* <Header /> */}
      //   <Content backgroundColor="red">
      <View
        style={{
          display: 'flex',
          flex: 1,
          //   backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#76ff7a',
        }}>
        {/* <Text>Square Thumbnail</Text>
            <Thumbnail square small source={{uri: uri}} />
            <Thumbnail square source={{uri: uri}} />
            <Thumbnail square large source={{uri: uri}} />
            <Text>Circular Thumbnail</Text>
            <Thumbnail small source={{uri: uri}} />
            <Thumbnail source={{uri: uri}} /> */}
        <Thumbnail large source={{ uri: uri }} />
        <View
          style={{
            width: '90%',
            marginTop: 60,
            height: 180,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}>
          <View style={{ width: '100%' }}>
            <Item>
              <Icon active name="user" type="Entypo" />
              <Input placeholder="Enter Email" 
              onChangeText = {this.handleEmail}/>
              
            </Item>
            <Item>
              <Icon name="lock" type="Entypo" />
              <Input
                secureTextEntry={this.state.hidePassword}
                placeholder="Enter Password"
                onChangeText = {this.handlePassword}

              />
              <Icon
                name="eye"
                type="AntDesign"
                onPress={() => this.handleHidePassword()}
              />
            </Item>
          </View>
          <View style={{ width: '100%' }}>
            <Button
              style={{
                width: '100%',
                backgroundColor: '#006add',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={this.userLogin}>
              {/* <Icon name="home" /> */}
              <Text>Login</Text>
            </Button>
          </View>
        </View>
      </View>
      //   </Content>
      //   </Container>
    );
  }
}
