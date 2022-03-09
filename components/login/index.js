import React, { Component, createRef } from 'react';
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
  H1,
  Title,
  Textarea,
} from 'native-base';
import { StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { login } from '../../redux/actions';
import { LOGIN } from '../../constants';
import { LOGINBUTTONID } from '../../constants/ids';
import AsyncStorage from '@react-native-async-storage/async-storage';
class Login extends Component {
  constructor(props) {
    super(props);
    // this.codeOneInput = createRef();
    // this.codeTwoInput = createRef();
    // this.codeThreeInput = createRef();
    // this.codeFourInput = createRef();

    this.state = {
      email: '',
      // password:'',
      code_one: '',
      code_two: '',
      code_three: '',
      code_four: '',
      hidePassword: true,
    };

  }
  // focusTextInput = () => this.codeOneInput.current.focus();

  // handleCodeChange = (value,id) => {

  //   console.log(value);

  //   // const { id, value } = e.target

  //   if (value.length < 2) {
  //     console.log("password ===> ", this.state);
  //     this.setState((prevState) => ({
  //       ...prevState,
  //       [id]: value
  //       // [id]: value
  //     }))
  //     if (id == 'code_one' && value.length > 0) {
  //       this.codeTwoInput.current.focus();
  //     }
  //     if (id == 'code_two' && value.length > 0) {
  //       this.codeThreeInput.current.focus();
  //     }
  //     if (id == 'code_three' && value.length > 0) {
  //       this.codeFourInput.current.focus();
  //     }
  //   }
  // }


  async componentDidUpdate(prevProps, prevState) {
    const token = await AsyncStorage.getItem('token');
    if (
      this.props.auth.loggedInUserDetails.token &&
      token !== this.props.auth.loggedInUserDetails.token
    ) {
      await AsyncStorage.setItem(
        'token',
        this.props.auth.loggedInUserDetails.token,
      );
      Actions.about();
    }
  }

  componentDidMount() { }

  // login = async (email, password) => {
  //   const res = await axios.post(
  //     'http://test.arwaj.com.pk:8085/sims_in/api/login',
  //     { email, password },
  //   ).catch((res) => {
  //     return { status: 401, message: 'Unauthorized' }
  //   })
  userLogin = loginID => {
    let email = this.state.email;
    // let password = this.state.code_one + this.state.code_two + this.state.code_three + this.state.code_four;
    let password = this.state.password;
    console.log({ email, password });
    if (email && password) {
      // if validation fails, value will be null

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
            extraProps: { id: loginID },
          },
        }),
      );
    }
  };

  handleHidePassword() {
    this.setState(state => {
      return {
        ...state,
        hidePassword: !this.state.hidePassword,
      };
    });
  }

  handleEmail = value => {
    this.setState({ email: value });
  };

  handlePassword = value => {
    this.setState({ password: value });
  };

  render() {

    // let digitCode = state.password.code_one + state.password.code_two + state.password.code_three + state.password.code_four

    const uri =
      'https://facebook.github.io/react-native/docs/assets/favicon.png';
    return (
      //   <Container backgroundColor="black">
      // {/* <Header /> */}
      //   <Content backgroundColor="red">
      <View
        style={{
          display: 'flex',
          // flex: 1,
          marginTop: 120,
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
          <Thumbnail source={{uri: uri}} /> */}
        {/* <Thumbnail large source={{ uri: uri }} /> */}
        <Text style={{ width: '100%', textAlign: 'center' }}>
          <Text style={{ color: 'grey', fontWeight: 'normal', fontSize: 28 }}>{`Welcome to \n`}</Text>
          <View >
            <Text style={{
              width: '100%', textAlign: 'center', paddingVertical: 8, fontWeight: '900'
            }}>

              <H1 style={{
                color: '#006add', fontStyle: 'normal', fontFamily: 'serif', fontWeight: 'bold', fontSize: 32
              }}>{"SIMS"}</H1>
              <H1 style={{
                color: '#37b349', fontStyle: 'normal', fontFamily: 'serif', fontWeight: 'bold', fontSize: 32
              }}>{"!N \n"}</H1>
              <Text style={{ color: 'grey', fontSize: 12, fontWeight: 'bold', fontStyle: 'normal' }}>{`E  R  P      S y s t e m`}</Text>

            </Text>
          </View>
        </Text>
        <Text >
          {' \n'}{' '}</Text>
        {/* <Thumbnail small source={{ uri: uri }} /> */}
        <Icon name="user" type="EvilIcons" style={{ color: '#006add', fontSize: 60, paddingVertical: 15 }} />


        <View
          style={{
            width: '100%',
            height: 150,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}>

          <Item style={{ width: '65%', }}>
            {/* <Icon active name="user" type="Entypo" /> */}
            <Input
              autoFocus={true}
              onChangeText={this.handleEmail}
              // placeholder="Enter Email"
              // style={styles.input}
              style={{
                borderBottomWidth: 1, borderBottomColor: '#006add',
              }}
            />
          </Item>
          <Text style={{ color: 'grey', marginTop: 5 }}>UserName</Text>
          <Item style={{ borderColor: 'transparent', width: '60%' }}>
            {/* <Icon name="lock" type="Entypo" /> */}

            <Input
              // getRef={(code_one) => this.codeOneInput = code_one} value={this.state.code_one} onChangeText={this.handleCodeChange}
              keyboardType="numeric"
              maxLength={1}
              // returnKeyType="next"
              // autoFocus={true}
              // secureTextEntry={this.state.hidePassword}
              // placeholder="Enter Password"
              onChangeText={this.handlePassword}
              // style={styles.input}
              style={{
                width: '10%', borderBottomWidth: 1, borderBottomColor: '#006add', textAlign: 'center'
              }}
            />
            <Input
              // getRef={(code_two) => this.codeTwoInput = code_two} value={this.state.code_two} onChangeText={this.handleCodeChange}
              keyboardType="numeric"
              maxLength={1}
              // returnKeyType="next"
              // autoFocus={true}
              // secureTextEntry={this.state.hidePassword}
              // // placeholder="Enter Password"
              onChangeText={this.handlePassword}
              // style={styles.input}
              style={{
                width: '10%', marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#006add', textAlign: 'center'
              }}
            />
            <Input
              // getRef={(code_three) => this.codeThreeInput = code_three} value={this.state.code_three} onChangeText={this.handleCodeChange}
              keyboardType="numeric"
              maxLength={1}
              // returnKeyType="next"
              // autoFocus={true}

              // secureTextEntry={this.state.hidePassword}
              // // placeholder="Enter Password"
              onChangeText={this.handlePassword}
              // style={styles.input}
              style={{
                width: '10%', marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#006add', textAlign: 'center'
              }}
            />
            <Input
              // getRef={(code_four) => this.codeFourInput = code_four} value={this.state.code_four} onChangeText={this.handleCodeChange}
              keyboardType="numeric"
              maxLength={1}
              // secureTextEntry={this.state.hidePassword}
              // // placeholder="Enter Password"
              onChangeText={this.handlePassword}
              // style={styles.input}
              style={{
                width: '10%', marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#006add', textAlign: 'center'
              }}
            />
            {/* <Icon
                name="eye"
                type="AntDesign"
                onPress={() => this.handleHidePassword()}
              /> */}
          </Item>
          <Text style={{ color: 'grey', marginTop: 5 }}>4 Digit Code</Text>
          <View style={{ width: '100%', marginLeft: 275, marginTop: 30 }}>
            <Button
              id={LOGINBUTTONID}
              style={{
                width: '30%',
                backgroundColor: '#006add',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 20,
                height: 35
              }}
              disabled={
                this?.props?.loader?.allIDs &&
                this.props.loader.allIDs.includes(LOGINBUTTONID)
              }
              onPress={() => this.userLogin(LOGINBUTTONID)}>
              {/* <Icon name="home" /> */}
              <Text style={{ width: '100%', textTransform: 'capitalize', textAlign: 'center' }}>Login</Text>
            </Button>
          </View>
        </View>
        <Text style={{ color: 'grey', marginTop: 180 }}>SIMSIN powered by ARWAJ</Text>
      </View>
      //   </Content>
      //   </Container>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(state => {
  return {
    auth: state.authReducer,
    loader: state.loaderReducer,
  };
})(Login);

const styles = StyleSheet.create({

  input: {
    width: '90%',
    color: '#006add',
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    alignSelf: 'center',
  }
})