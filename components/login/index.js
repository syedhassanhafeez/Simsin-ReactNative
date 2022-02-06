import React, {Component} from 'react';
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
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {login} from '../../redux/actions';
import {LOGIN} from '../../constants';
import {LOGINBUTTONID} from '../../constants/ids';
import AsyncStorage from '@react-native-async-storage/async-storage';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hidePassword: true,
    };
  }

  async componentDidUpdate(prevProps, prevState) {
    const token = await AsyncStorage.getItem('token');
    if (token !== this.props.auth.loggedInUserDetails.token) {
      await AsyncStorage.setItem(
        'token',
        this.props.auth.loggedInUserDetails.token,
      );
      Actions.about();
    }
  }

  componentDidMount() {}

  // login = async (email, password) => {
  //   const res = await axios.post(
  //     'http://test.arwaj.com.pk:8085/sims_in/api/login',
  //     { email, password },
  //   ).catch((res) => {
  //     return { status: 401, message: 'Unauthorized' }
  //   })
  userLogin = loginID => {
    let email = this.state.email;
    let password = this.state.password;
    console.log({email, password});
    if (email && password) {
      // if validation fails, value will be null
      console.log('calling');
      this.props.dispatch(
        login({
          requestDetails: {
            requestUrl: '/login',
            requestMethod: 'POST',
            requestHeaders: {},
            requestBody: {
              user_no: email,
              user_password: password,
            },
          },
          reducerDetails: {
            actionType: LOGIN,
            extraProps: {id: loginID},
          },
        }),
      );
    }
  };

  handleHidePassword() {
    console.log('Hi');
    this.setState(state => {
      return {
        ...state,
        hidePassword: !this.state.hidePassword,
      };
    });
  }

  handleEmail = value => {
    this.setState({email: value});
  };

  handlePassword = value => {
    this.setState({password: value});
  };

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
        <Thumbnail large source={{uri: uri}} />
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
          <View style={{width: '100%'}}>
            <Item>
              <Icon active name="user" type="Entypo" />
              <Input
                placeholder="Enter Email"
                onChangeText={this.handleEmail}
              />
            </Item>
            <Item>
              <Icon name="lock" type="Entypo" />
              <Input
                secureTextEntry={this.state.hidePassword}
                placeholder="Enter Password"
                onChangeText={this.handlePassword}
              />
              <Icon
                name="eye"
                type="AntDesign"
                onPress={() => this.handleHidePassword()}
              />
            </Item>
          </View>
          <View style={{width: '100%'}}>
            <Button
              id={LOGINBUTTONID}
              style={{
                width: '100%',
                backgroundColor: '#006add',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              disabled={
                this?.props?.loader?.allIDs &&
                this.props.loader.allIDs.includes(LOGINBUTTONID)
              }
              onPress={() => this.userLogin(LOGINBUTTONID)}>
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
function mapStateToProps(state) {
  console.log('state in Login === ', state);
  return state;
}

export default connect(state => {
  return {
    auth: state.authReducer,
    loader: state.loaderReducer,
  };
})(Login);
