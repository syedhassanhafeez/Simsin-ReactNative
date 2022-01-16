import React, { Component } from 'react';
import {
  Container,
  Card,
  Header,
  Content,
  Footer,
  FooterTab,
  Icon,
  Text,
  View,
  H1,
  H2,
  CardItem,
  H3,
  Left,
  Body,
  Button,
} from 'native-base';
import CardItemBordered from '../cards/CardItemBordered';
import { CustomBarGraph, CustomLineGraph2 } from '../graphs';
import CustomTable from '../customTable';
import { Dimensions, ScrollView, ScrollViewComponent, ViewPagerAndroidBase } from 'react-native'
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

import PickerInput from '../pickerInput';

export default class Main extends Component {

  render() {
    let screenWidth = Dimensions.get('window').width;
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
        },
      ],
    };
    return (
      <View style={{ backgroundColor: 'white' }}>
        <PickerInput />
        <ScrollView>
          <View>
            <CardItemBordered
              cardStyle={{
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                backgroundColor: '#006add',
              }}
              headerText={[
                <Text style={{ color: 'white', width: '100%' }}>
                  {'Todays Collection \n'}{' '}
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 35,
                    }}>{`65,520`}</Text>{' '}
                </Text>,
              ]}
              headerStyle={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
              }}
              cardBody={[]}
              cardBodyStyle={[
                {
                  backgroundColor: '#006add',
                  height: 100,
                  width: '100%',
                },
              ]}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: -100,
              justifyContent: 'center',
            }}>
            <View style={{ width: '32%', height: 'auto' }}>
              <CardItemBordered
                cardStyle={{
                  textAlign: 'center',
                  shadowOpacity: 0.3,
                  elevation: 10,
                  borderRadius: 8,
                }}
                useOtherTag={true}
                headerText={[
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'grey',
                      width: '100%',
                    }}>{`Monthly\nFee\n`}</Text>,
                ]}
                useDividerTag={true}
                headerStyle={{ textAlign: 'center', width: '100%' }}
                cardBody={[
                  <Text style={{ width: '100%', color: '#006add', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: -10 }}>

                    1000000
                  </Text>,
                ]}
              />
            </View>
            <View style={{ width: '32%', height: 'auto' }}>
              <CardItemBordered
                cardStyle={{
                  textAlign: 'center',
                  shadowOpacity: 0.3,
                  elevation: 10,
                  borderRadius: 8,
                }}
                useOtherTag={true}
                headerText={[
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'grey',
                      width: '100%',
                    }}>{`Monthly\nCollection\n`}</Text>,
                ]}
                useDividerTag={true}
                headerStyle={{ textAlign: 'center', width: '100%' }}
                cardBody={[
                  <Text style={{ width: '100%', color: '#006add', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: -10 }}>

                    1600000
                  </Text>,
                ]}
              />
            </View>
            <View style={{ width: '32%', height: 'auto' }}>
              <CardItemBordered
                cardStyle={{
                  textAlign: 'center',
                  shadowOpacity: 0.3,
                  elevation: 10,
                  borderRadius: 8,
                }}
                useOtherTag={true}
                headerText={[
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'grey',
                      width: '100%',
                    }}>{`Receivable\nAmount\n`}</Text>,
                ]}
                useDividerTag={true}
                headerStyle={{ textAlign: 'center', width: '100%' }}
                cardBody={[
                  <Text style={{ width: '100%', color: '#006add', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: -10 }}>

                    1800000
                  </Text>,
                ]}
              />
            </View>
          </View>
          <View>
            <CardItemBordered
              cardStyle={{
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                textAlign: 'center',
              }}
              headerText={[
                <Text style={{ color: '#006add' }}>{'Total Receivable'}</Text>,
              ]}
              viewButton={[
                  
                <Button

                  onPress={() => this.props.onTabPress(1)}
                  iconRight
                  small
                  success
                  style={{ width: '100%', borderRadius: 8 }} >
                  <Text style={{ textTransform: 'capitalize', }} >View More</Text>
                  <Icon name="chevron-forward" style={{ marginLeft: -20, fontSize: 20 }} />
                </Button>]}
              headerStyle={{ flexDirection: "row", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}

              cardBody={[<CustomBarGraph />]}
              cardBodyStyle={[{ backgroundColor: 'white' }]}
            />
            <CardItemBordered
              cardStyle={{
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                backgroundColor: '#006add',
              }}
              headerText={['']}
              cardBody={{}}
              cardBodyStyle={[
                {
                  backgroundColor: '#006add',
                  height: 50,
                },
              ]}
            />
          </View>

          <View>
            <CardItemBordered
              cardStyle={{
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                textAlign: 'center',
              }}
              headerText={[
                <Text style={{ color: '#006add' }}>
                  {'Total Collection (monthwise)'}
                </Text>,
              ]}
              cardBody={[<CustomLineGraph2 />]}
              cardBodyStyle={[{ backgroundColor: 'white' }]}
            />
          </View>
          <View>
            <CardItemBordered
              cardStyle={{
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                textAlign: 'center',
                backgroundColor: '#006add',
              }}
              headerText={[
                <Text style={{ color: 'white', width: '100%' }}>{'Admission & Left'}</Text>
              ]}
              viewButton={[

                <Button
                  // onPress={() => { this.scroll.scrollTo({ x: screenWidth }) }} 
                  active
                  onPress={() => this.props.onTabPress(3)}
                  iconRight small success style={{ width: '100%', borderRadius: 8 }} >
                  <Text style={{ textTransform: 'capitalize', }}>View More</Text>
                  <Icon name="chevron-forward" style={{ marginLeft: -20, fontSize: 20 }} />
                </Button>
              ]}
              headerStyle={{ flexDirection: "row", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              useOtherTag={true}
              cardBody={[
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}
                // ref={(node) => this.scroll = node} 
                >
                  <View style={{ width: '25%' }}>
                    <CardItemBordered
                      cardStyle={{
                        shadowOpacity: 0.3,
                        elevation: 10,
                        borderRadius: 8,
                        borderBottomColor: '#37b349',
                        borderBottomWidth: 4,
                      }}
                      headerText={[
                        <Text style={{ fontSize: 13, color: 'grey' }}>
                          Enquiries
                        </Text>,
                      ]}
                      viewButton={[
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#37b349',
                          }}>
                          45
                        </Text>,
                      ]}
                      useOtherTag={true}
                      headerStyle={{ borderBottomColor: 'grey', borderBottomWidth: 0.7, flexDirection: "row", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                      cardBody={[<H1 style={{ width: '100%', color: '#006add', fontWeight: 'bold', textAlign: 'center' }}>-</H1>]}
                      cardBodyStyle={[{ backgroundColor: "white" }]}
                    />
                  </View>
                  <View style={{ width: '25%' }}>

                    <CardItemBordered
                      cardStyle={{
                        shadowOpacity: 0.3,
                        elevation: 10,
                        borderRadius: 8,
                        borderBottomColor: '#37b349',
                        borderBottomWidth: 4,
                      }}
                      headerText={[
                        <Text style={{ fontSize: 13, color: 'grey' }}>
                          Admissions
                        </Text>,
                      ]}
                      viewButton={[
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#37b349',
                          }}>
                          45
                        </Text>,
                      ]}
                      useOtherTag={true}
                      headerStyle={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 0.7,
                        flexDirection: 'row',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                      cardBody={[
                        <H1 style={{ width: '100%', color: '#006add', fontWeight: 'bold', textAlign: 'center' }}>
                          435,345
                        </H1>,
                      ]}
                    />
                  </View>

                  <View style={{ width: '25%' }}>
                    <CardItemBordered
                      cardStyle={{
                        shadowOpacity: 0.3,
                        elevation: 10,
                        borderRadius: 8,
                        borderBottomColor: '#37b349',
                        borderBottomWidth: 4,
                      }}
                      headerText={[
                        <Text style={{ fontSize: 13, color: 'grey' }}>
                          Registeration
                        </Text>,
                      ]}
                      viewButton={[
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#37b349',
                          }}>
                          10
                        </Text>,
                      ]}
                      useOtherTag={true}
                      headerStyle={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 0.7,
                        flexDirection: 'row',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                      cardBody={[
                        <H1 style={{ width: '100%', color: '#006add', fontWeight: 'bold', textAlign: 'center' }}>
                          25,500
                        </H1>,
                      ]}
                    />
                  </View>
                  <View style={{ width: '25%' }}>
                    <CardItemBordered
                      cardStyle={{
                        shadowOpacity: 0.3,
                        elevation: 10,
                        borderRadius: 8,
                        borderBottomColor: '#37b349',
                        borderBottomWidth: 4,
                      }}
                      headerText={[
                        <Text style={{ fontSize: 13, color: 'grey' }}>
                          Stu. Left
                        </Text>,
                      ]}
                      viewButton={[
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#37b349',
                          }}>
                          35
                        </Text>,
                      ]}
                      useOtherTag={true}
                      headerStyle={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 0.7,
                        flexDirection: 'row',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                      cardBody={[
                        <H1 style={{ width: 'auto', color: '#006add', fontWeight: 'bold', textAlign: 'center' }}>
                          (43,345)
                        </H1>,
                      ]}
                    />
                  </View>

                </ScrollView>,
              ]}
              cardBodyStyle={[
                {
                  backgroundColor: '#006add',
                  height: 'auto',
                },
              ]}
            />
          </View>
          <View>
            <CardItemBordered
              cardStyle={{
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
              }}
              headerText={[
                <Text
                  style={{ width: '100%', color: '#006add'}}>
                  {'Top 5 Defaulters '}
                </Text>,
              ]}
              viewButton={[
                <Button
                  active onPress={() => this.props.onTabPress(1)}
                  iconRight
                  small
                  success
                  style={{ width: '100%', borderRadius: 8 }}>
                  <Text style={{ textTransform: 'capitalize' }}>View More</Text>
                  <Icon
                    name="chevron-forward"
                    style={{ marginLeft: -20, fontSize: 20 }}
                  />
                </Button>,
              ]}
              headerStyle={{
                flexDirection: 'row',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              useOtherTag={true}
              cardBody={[
                <View>
                  <CardItemBordered
                    cardStyle={{
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 0,
                      marginBottom: 0,
                      shadowOpacity: 0.3,
                      elevation: 10,
                      borderRadius: 8,
                      borderBottomColor: '#37b349',
                      borderBottomWidth: 4,
                    }}
                    headerText={[
                      <H1
                        style={{
                          width: '100%',
                          color: '#006add',
                          fontWeight: 'bold',
                          fontSize: 35,
                        }}>
                        {'\n435,345'}
                      </H1>,
                    ]}
                    headerStyle={{
                      textAlign: 'center',
                      width: '100%',
                    }}
                    useOtherTag={true}
                    cardBody={{}}
                    cardBodyStyle={[
                      {
                        height: 'auto',
                      },
                    ]}
                  />
                </View>,
              ]}
              cardBodyStyle={[
                {
                  backgroundColor: 'white',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  height: 'auto',
                },
              ]}
            />
          </View>
          <View>
            <CardItemBordered
              cardStyle={{
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                textAlign: 'center',
                backgroundColor: '#006add',
              }}
              headerText={[
                <Text style={{ color: 'white', width: '100%' }}>
                  {`HR & Payroll`}
                </Text>
              ]}
              viewButton={[
                <Button
                  active onPress={() => this.props.onTabPress(2)}
                  iconRight small success style={{ width: '100%', borderRadius: 8 }} >
                  <Text style={{ textTransform: 'capitalize', }}>View More</Text>
                  <Icon name="chevron-forward" style={{ marginLeft: -20, fontSize: 20 }} />
                </Button>

              ]}
              useOtherTag={true}
              headerStyle={{
                flexDirection: 'row',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              cardBody={[
                <View
                  style={{
                    width: '100%',
                    height: 'auto',
                    flexDirection: 'row',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}>
                  <View style={{ width: '32%' }}>
                    <CardItemBordered
                      useOtherTag={true}
                      headerText={[
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'grey',
                            width: '100%',
                          }}>{`Total\nStaff\n`}</Text>,
                      ]}
                      useDividerTag={true}
                      headerStyle={{ textAlign: 'center', width: '100%' }}
                      cardBody={[
                        <H2
                          style={{
                            color: '#006add',
                            fontWeight: 'bold',
                            width: '100%',
                            textAlign: 'center',
                            marginTop: -10,
                          }}>
                          55
                        </H2>,
                      ]}
                    />
                  </View>
                  <View
                    style={{
                      width: '32%',
                    }}>
                    <CardItemBordered
                      useOtherTag={true}
                      headerText={[
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'grey',
                            width: '100%',
                          }}>{`Today's\nAbsent\n`}</Text>,
                      ]}
                      useDividerTag={true}
                      headerStyle={{ textAlign: 'center', width: '100%' }}
                      cardBody={[
                        <H2
                          style={{
                            color: '#006add',
                            fontWeight: 'bold',
                            width: '100%',
                            textAlign: 'center',
                            marginTop: -10,
                          }}>
                          3
                        </H2>,
                      ]}
                    />
                  </View>
                  <View style={{ width: '32%' }}>
                    <CardItemBordered
                      useOtherTag={true}
                      headerText={[
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'grey',
                            width: '100%',
                          }}>{`Today's\nLate\n`}</Text>,
                      ]}
                      useDividerTag={true}
                      headerStyle={{ textAlign: 'center', width: '100%' }}
                      cardBody={[
                        <H2
                          style={{
                            color: '#006add',
                            fontWeight: 'bold',
                            width: '100%',
                            textAlign: 'center',
                            marginTop: -10,
                          }}>
                          6
                        </H2>,
                      ]}
                    />
                  </View>
                </View>,
              ]}
              cardBodyStyle={[
                {
                  backgroundColor: '#006add',
                  height: 'auto',
                },
              ]}
            />
          </View>
        </ScrollView >
      </View >
    );
  }
}
