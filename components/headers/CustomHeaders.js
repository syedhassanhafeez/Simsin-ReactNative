import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
export default class CustomHeaders extends Component {
  render() {
    return (
      <Header style={{ width: '100%', backgroundColor: '#37b349' }} androidStatusBarColor="#006add">
        <Left>
          {/* <Button transparent>
            <Icon name="arrow-back" />
          </Button> */}
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title></Title>
        </Body>
        <Body>
          <Title>SIMSIN</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="sync-outline" />
          </Button>
          <Button transparent>
            <Icon name="notifications-outline" />
          </Button>


        </Right>
      </Header>
    );
  }
}
