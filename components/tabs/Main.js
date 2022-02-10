import React, {Component} from 'react';
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
import {connect} from 'react-redux';
import CardItemBordered from '../cards/CardItemBordered';
import {CustomBarGraph, CustomLineGraph2} from '../graphs';
import CustomTable from '../customTable';
import {
  Dimensions,
  ScrollView,
  ScrollViewComponent,
  ViewPagerAndroidBase,
} from 'react-native';
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
import {
  feeSummary,
  genericAction,
  totalCollectionMonthwise,
  totalReceivables,
} from '../../redux/actions';
import {
  FEESUMMARY,
  GETADMISSIONLEFT,
  GETEMPLOYEESSUMMARY,
  GETTOP5DEFAULTERS,
  TOTALCOLLECTIONMONTHWISE,
  TOTALRECEIVABLES,
} from '../../constants';
import {
  FEESUMMARYID,
  GETADMISSIONLEFTID,
  GETEMPLOYEESSUMMARYID,
  GETTOP5DEFAULTERSID,
  TOTALCOLLECTIONMONTHWISEID,
  TOTALRECEIVABLESID,
} from '../../constants/ids';

class Main extends Component {
  componentDidMount() {
    if (this?.props?.auth?.selectedCampusDetails?.campus_id) {
      this.props.dispatch(
        feeSummary({
          requestDetails: {
            requestUrl: `/fee/get_fee_summary?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: FEESUMMARY,
            extraProps: {id: FEESUMMARYID},
          },
        }),
      );
      this.props.dispatch(
        totalReceivables({
          requestDetails: {
            requestUrl: `/fee/get_total_receivable?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: TOTALRECEIVABLES,
            extraProps: {id: TOTALRECEIVABLESID},
          },
        }),
      );
      this.props.dispatch(
        totalCollectionMonthwise({
          requestDetails: {
            requestUrl: `/fee/get_total_collection_monthwise?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: TOTALCOLLECTIONMONTHWISE,
            extraProps: {id: TOTALCOLLECTIONMONTHWISEID},
          },
        }),
      );

      this.props.dispatch(
        genericAction({
          requestDetails: {
            requestUrl: `/fee/get_admission_left?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETADMISSIONLEFT,
            extraProps: {id: GETADMISSIONLEFTID},
          },
        }),
      );

      this.props.dispatch(
        genericAction({
          requestDetails: {
            requestUrl: `/fee/get_top_five_defaulters_count?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETTOP5DEFAULTERS,
            extraProps: {id: GETTOP5DEFAULTERSID},
          },
        }),
      );

      this.props.dispatch(
        genericAction({
          requestDetails: {
            requestUrl: `/employee/get_employee_summary?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETEMPLOYEESSUMMARY,
            extraProps: {id: GETEMPLOYEESSUMMARYID},
          },
        }),
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps?.auth?.selectedCampusDetails?.campus_id !==
      this?.props?.auth?.selectedCampusDetails?.campus_id
    ) {
      this.props.dispatch(
        feeSummary({
          requestDetails: {
            requestUrl: `/fee/get_fee_summary?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: FEESUMMARY,
            extraProps: {id: FEESUMMARYID},
          },
        }),
      );
      this.props.dispatch(
        totalReceivables({
          requestDetails: {
            requestUrl: `/fee/get_total_receivable?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: TOTALRECEIVABLES,
            extraProps: {id: TOTALRECEIVABLESID},
          },
        }),
      );
      this.props.dispatch(
        totalCollectionMonthwise({
          requestDetails: {
            requestUrl: `/fee/get_total_collection_monthwise?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: TOTALCOLLECTIONMONTHWISE,
            extraProps: {id: TOTALCOLLECTIONMONTHWISEID},
          },
        }),
      );

      this.props.dispatch(
        genericAction({
          requestDetails: {
            requestUrl: `/fee/get_admission_left?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETADMISSIONLEFT,
            extraProps: {id: GETADMISSIONLEFTID},
          },
        }),
      );

      this.props.dispatch(
        genericAction({
          requestDetails: {
            requestUrl: `/fee/get_top_five_defaulters_count?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETTOP5DEFAULTERS,
            extraProps: {id: GETTOP5DEFAULTERSID},
          },
        }),
      );

      this.props.dispatch(
        genericAction({
          requestDetails: {
            requestUrl: `/employee/get_employee_summary?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETEMPLOYEESSUMMARY,
            extraProps: {id: GETEMPLOYEESSUMMARYID},
          },
        }),
      );
    }
  }

  constructData(data) {
    if (data) {
      let finalizedData = Object.values(data).map(item => {
        return item ? parseInt(item?.replace(/,/g, '')) : 0;
      });
      return finalizedData;
    }
    return [];
  }

  render() {
    let screenWidth = Dimensions.get('window').width;
    let totalReceivableGraphLabels = this.props?.accounts?.totalReceivables
      ? Object.keys(this.props.accounts.totalReceivables)
      : [];
    let totalReceivableGraphData = this.constructData(
      this.props?.accounts?.totalReceivables,
    );
    let totalCollectionMonthwiseGraphLabels = this.props?.accounts
      ?.totalCollectionMonthwise
      ? Object.keys(this.props.accounts.totalCollectionMonthwise)
      : [];
    let totalCollectionMonthwiseGraphData = this.constructData(
      this.props?.accounts?.totalCollectionMonthwise,
    );
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
        },
      ],
    };
    return (
      <View style={{backgroundColor: 'white'}}>
        {/* <PickerInput /> */}
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
                <Text style={{color: 'white', width: '100%'}}>
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
            <View style={{width: '32%', height: 'auto'}}>
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
                headerStyle={{textAlign: 'center', width: '100%'}}
                cardBody={[
                  <Text
                    style={{
                      width: '100%',
                      color: '#006add',
                      fontSize: 14,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: -10,
                    }}>
                    {this.props.accounts.monthly_fee}
                  </Text>,
                ]}
              />
            </View>
            <View style={{width: '32%', height: 'auto'}}>
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
                headerStyle={{textAlign: 'center', width: '100%'}}
                cardBody={[
                  <Text
                    style={{
                      width: '100%',
                      color: '#006add',
                      fontSize: 14,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: -10,
                    }}>
                    {this.props.accounts.monthly_collection}
                  </Text>,
                ]}
              />
            </View>
            <View style={{width: '32%', height: 'auto'}}>
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
                headerStyle={{textAlign: 'center', width: '100%'}}
                cardBody={[
                  <Text
                    style={{
                      width: '100%',
                      color: '#006add',
                      fontSize: 14,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: -10,
                    }}>
                    {this.props.accounts.receivable}
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
                <Text style={{color: '#006add'}}>{'Total Receivable'}</Text>,
              ]}
              viewButton={[
                <Button
                  onPress={() => this.props.onTabPress(1)}
                  iconRight
                  small
                  success
                  style={{width: '100%', borderRadius: 8}}>
                  <Text style={{textTransform: 'capitalize'}}>View More</Text>
                  <Icon
                    name="chevron-forward"
                    style={{marginLeft: -20, fontSize: 20}}
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
              cardBody={[
                <CustomBarGraph
                  graphData={{
                    labels: totalReceivableGraphLabels,
                    data: totalReceivableGraphData,
                  }}
                />,
              ]}
              cardBodyStyle={[{backgroundColor: 'white'}]}
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
                <Text style={{color: '#006add'}}>
                  {'Total Collection (monthwise)'}
                </Text>,
              ]}
              cardBody={[
                // <H1>456</H1>,
                <CustomLineGraph2
                  graphData={{
                    labels: totalCollectionMonthwiseGraphLabels,
                    data: totalCollectionMonthwiseGraphData,
                  }}
                />,
              ]}
              cardBodyStyle={[{backgroundColor: 'white'}]}
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
                <Text style={{color: 'white', width: '100%'}}>
                  {'Admission & Left'}
                </Text>,
              ]}
              viewButton={[
                <Button
                  // onPress={() => { this.scroll.scrollTo({ x: screenWidth }) }}
                  active
                  onPress={() => this.props.onTabPress(3)}
                  iconRight
                  small
                  success
                  style={{width: '100%', borderRadius: 8}}>
                  <Text style={{textTransform: 'capitalize'}}>View More</Text>
                  <Icon
                    name="chevron-forward"
                    style={{marginLeft: -20, fontSize: 20}}
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
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    textAlign: 'center',
                  }}
                  // ref={(node) => this.scroll = node}
                >
                  <View style={{width: '30%'}}>
                    <CardItemBordered
                      cardStyle={{
                        shadowOpacity: 0.3,
                        elevation: 10,
                        borderRadius: 8,
                        borderBottomColor: '#37b349',
                        borderBottomWidth: 4,
                      }}
                      headerText={[
                        <Text style={{fontSize: 13, color: 'grey'}}>
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
                          {this?.props?.academics?.enquiries?.count
                            ? this?.props?.academics?.enquiries?.count
                            : 0}
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
                        <H1
                          style={{
                            width: '100%',
                            color: '#006add',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}>
                          -
                        </H1>,
                      ]}
                      cardBodyStyle={[{backgroundColor: 'white'}]}
                    />
                  </View>
                  <View style={{width: '30%'}}>
                    <CardItemBordered
                      cardStyle={{
                        shadowOpacity: 0.3,
                        elevation: 10,
                        borderRadius: 8,
                        borderBottomColor: '#37b349',
                        borderBottomWidth: 4,
                      }}
                      headerText={[
                        <Text style={{fontSize: 13, color: 'grey'}}>
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
                          {this?.props?.academics?.admission?.count
                            ? this?.props?.academics?.admission?.count
                            : 0}
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
                        <H1
                          style={{
                            width: '100%',
                            color: '#006add',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}>
                          {this?.props?.academics?.admission?.amount
                            ? this?.props?.academics?.admission?.amount
                            : 0}
                        </H1>,
                      ]}
                    />
                  </View>

                  <View style={{width: '30%'}}>
                    <CardItemBordered
                      cardStyle={{
                        shadowOpacity: 0.3,
                        elevation: 10,
                        borderRadius: 8,
                        borderBottomColor: '#37b349',
                        borderBottomWidth: 4,
                      }}
                      headerText={[
                        <Text style={{fontSize: 13, color: 'grey'}}>
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
                        <H1
                          style={{
                            width: '100%',
                            color: '#006add',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}>
                          25,500
                        </H1>,
                      ]}
                    />
                  </View>
                  <View style={{width: '30%'}}>
                    <CardItemBordered
                      cardStyle={{
                        shadowOpacity: 0.3,
                        elevation: 10,
                        borderRadius: 8,
                        borderBottomColor: '#37b349',
                        borderBottomWidth: 4,
                      }}
                      headerText={[
                        <Text style={{fontSize: 13, color: 'grey'}}>
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
                          {this?.props?.academics?.student_left?.count
                            ? this?.props?.academics?.student_left?.count
                            : 0}
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
                        <H1
                          style={{
                            width: 'auto',
                            color: '#006add',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}>
                          {this?.props?.academics?.student_left?.amount
                            ? this?.props?.academics?.student_left?.amount
                            : 0}
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
                <Text style={{width: '100%', color: '#006add'}}>
                  {'Top 5 Defaulters '}
                </Text>,
              ]}
              viewButton={[
                <Button
                  active
                  onPress={() => this.props.onTabPress(1)}
                  iconRight
                  small
                  success
                  style={{width: '100%', borderRadius: 8}}>
                  <Text style={{textTransform: 'capitalize'}}>View More</Text>
                  <Icon
                    name="chevron-forward"
                    style={{marginLeft: -20, fontSize: 20}}
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
                        {`\n${this.props.accounts.top_five_defaulters_count}`}
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
                <Text style={{color: 'white', width: '100%'}}>
                  {`HR & Payroll`}
                </Text>,
              ]}
              viewButton={[
                <Button
                  active
                  onPress={() => this.props.onTabPress(2)}
                  iconRight
                  small
                  success
                  style={{width: '100%', borderRadius: 8}}>
                  <Text style={{textTransform: 'capitalize'}}>View More</Text>
                  <Icon
                    name="chevron-forward"
                    style={{marginLeft: -20, fontSize: 20}}
                  />
                </Button>,
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
                  <View style={{width: '32%'}}>
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
                      headerStyle={{textAlign: 'center', width: '100%'}}
                      cardBody={[
                        <H2
                          style={{
                            color: '#006add',
                            fontWeight: 'bold',
                            width: '100%',
                            textAlign: 'center',
                            marginTop: -10,
                          }}>
                          {this?.props?.hr?.total_staff
                            ? this?.props?.hr?.total_staff
                            : 0}
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
                      headerStyle={{textAlign: 'center', width: '100%'}}
                      cardBody={[
                        <H2
                          style={{
                            color: '#006add',
                            fontWeight: 'bold',
                            width: '100%',
                            textAlign: 'center',
                            marginTop: -10,
                          }}>
                          {this?.props?.hr?.todays_absent
                            ? this?.props?.hr?.todays_absent
                            : 0}
                        </H2>,
                      ]}
                    />
                  </View>
                  <View style={{width: '32%'}}>
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
                      headerStyle={{textAlign: 'center', width: '100%'}}
                      cardBody={[
                        <H2
                          style={{
                            color: '#006add',
                            fontWeight: 'bold',
                            width: '100%',
                            textAlign: 'center',
                            marginTop: -10,
                          }}>
                          {this?.props?.hr?.todays_late
                            ? this?.props?.hr?.todays_late
                            : 0}
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
        </ScrollView>
      </View>
    );
  }
}

export default connect(state => {
  return {
    accounts: state.accountsReducer,
    auth: state.authReducer,
    academics: state.academicsReducer,
    hr: state.hrReducer,
  };
})(Main);
