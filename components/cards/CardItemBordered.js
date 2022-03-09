import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  View,
  Button,
  Divider,
} from 'native-base';

export default class CardItemBordered extends Component {
  render() {
    return (
      <Card style={{...this.props.cardStyle}}>
        {this.props.headerText.map((item, index) => (
          <View
            style={
              this.props.eachCardView
                ? {
                    ...this.props.eachCardView[index],
                  }
                : {color: 'white'}
            }>
            {!this.props.doNotUseHeaders && (
              <CardItem
                style={
                  this.props.cardBodyStyle
                    ? {
                        ...this.props.cardBodyStyle[index],
                      }
                    : {}
                }>
                {this.props.viewButton ? (
                  <View
                    style={
                      this.props.headerStyle ? {...this.props.headerStyle} : {}
                    }>
                    <Text>{this.props.headerText[index]}</Text>
                    <Text style={{marginLeft: 10}}>
                      {this.props.viewButton[index]}
                    </Text>
                  </View>
                ) : (
                  <Text
                    style={
                      this.props.headerStyle ? {...this.props.headerStyle} : {}
                    }>
                    {this.props.headerText[index]}
                    {this.props.useDividerTag && (
                      <View
                        style={{
                          borderBottomColor: 'grey',
                          borderBottomWidth: 0.7,
                          paddingTop: 10,
                          width: 90,
                          // backgroundColor: 'red',
                        }}
                      />
                    )}
                    {this.props.viewButton && this.props.viewButton[index]}
                  </Text>
                )}
              </CardItem>
            )}
            <CardItem
              style={
                this.props.cardBodyStyle
                  ? {
                      ...this.props.cardBodyStyle[index],
                    }
                  : {color: '2b388F'}
              }>
              <Body>
                {this.props.useOtherTag ? (
                  this.props.cardBody[index]
                ) : (
                  <Text>{this.props.cardBody[index]}</Text>
                )}
              </Body>
            </CardItem>
          </View>
        ))}
      </Card>
    );
  }
}
