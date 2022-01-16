import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Card,
  CardItem,
  Body,
  View,
  H1,
} from 'native-base';

import CustomHeaders from '../headers/CustomHeaders';
import Main from '../tabs/Main';
import Fee from '../tabs/Fee';
import Academics from '../tabs/Academics';
import HR from '../tabs/HR';
import Accounts from '../tabs/Accounts';
import {ScrollView} from 'react-native';

export default class FooterTabs extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
    this.onTabPress = this.onTabPress.bind(this);
  }

  onTabPress = tabNumber => {
    this.setState(state => {
      return {
        ...state,
        activeTab: tabNumber,
      };
    });
  };

  render() {
    // let buttonArray = [
    //   {
    //     // iconName: <MaterialCommunityIcons name="view-dashboard" />,
    //     textName: 'Main',
    //     component: <Main />,
    //   },
    //   {
    //     // iconName: <Entypo name="credit" />,
    //     textName: 'Fee',
    //     component: <Fee />,
    //   },
    //   {
    //     // iconName: <FontAwesome name="book" />,
    //     textName: 'Acad',
    //     component: <Academics />,
    //   },
    //   {
    //     // iconName: <Ionicons name="people" />,
    //     textName: 'HR',
    //     component: <HR />,
    //   },
    //   {
    //     // iconName: <MaterialCommunityIcons name="account" />,
    //     textName: 'A/C',
    //     component: <Accounts />,
    //   },
    // ];
    let buttonArray = [
      {
        iconName: 'home',
        iconType: 'FontAwesome',
        // textName: 'Main',
        component: <Main onTabPress={this.onTabPress}/>,
      },
      {
        iconName: 'hand-holding-usd',
        iconType: 'FontAwesome5',
        // textName: 'Fee',
        component: <Fee onTabPress={this.onTabPress}/>,
      },
      {
        iconName: 'user-friends',
        iconType: 'FontAwesome5',
        // textName: 'Acad',
        component: <Academics onTabPress={this.onTabPress}/>,
      },
      {
        
        iconName: 'graduation-cap',
        iconType: 'FontAwesome',
        // textName: 'HR',
        component: <HR onTabPress={this.onTabPress}/>,
      },
      {
        iconName: 'calculator-sharp',
        iconType: 'Ionicons',
        // textName: 'A/C',
        component: <Accounts />,
      },
    ];
    return (
      <Container>
        <CustomHeaders />
        <Content>{buttonArray[this.state.activeTab].component}</Content>
        <Footer>
          <FooterTab style={{backgroundColor: '#37b349'}}>
            {buttonArray.map((item, index) => (
              <Button
                style={{backgroundColor: '#37b349'}}
                vertical
                active={this.state.activeTab === index}
                onPress={() => this.onTabPress(index)}>
                {console.log(`${item.iconName} ${item.iconType}`)}
                <Icon name={item.iconName} type={item.iconType} />
                {/* <Text>{item.textName}</Text> */}
              </Button>
            ))}
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
