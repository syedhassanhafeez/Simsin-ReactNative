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
import CustomTable from '../customTable';
import {CustomBarGraph, CustomLineGraph} from '../graphs';
import CardItemBordered from '../cards/CardItemBordered';
import PickerInput from '../pickerInput';
import {ScrollView} from 'react-native';
import CustomTable2 from '../customTable/secondTable';
import CustomTable3 from '../customTable/thirdTable';
import CustomTable4 from '../customTable/fourTable';
import CustomTable5 from '../customTable/fifthTable';
import {GETLATESTAFFSUMMARY, GETTODAYSABSENTSUMMARY} from '../../constants';
import {
  GETLATESTAFFSUMMARYID,
  GETTODAYSABSENTSUMMARYID,
} from '../../constants/ids';
import {genericAction} from '../../redux/actions';

class Academics extends Component {
  componentDidMount() {
    if (this?.props?.auth?.selectedCampusDetails?.campus_id) {
      this.props.dispatch(
        genericAction({
          requestDetails: {
            requestUrl: `/employee/get_todays_absent_summary?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETTODAYSABSENTSUMMARY,
            extraProps: {id: GETTODAYSABSENTSUMMARYID},
          },
        }),
      );

      this.props.dispatch(
        genericAction({
          requestDetails: {
            requestUrl: `/employee/get_top_five_late_summary?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETLATESTAFFSUMMARY,
            extraProps: {id: GETLATESTAFFSUMMARYID},
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
        genericAction({
          requestDetails: {
            requestUrl: `/employee/get_todays_absent_summary?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETTODAYSABSENTSUMMARY,
            extraProps: {id: GETTODAYSABSENTSUMMARYID},
          },
        }),
      );
      this.props.dispatch(
        genericAction({
          requestDetails: {
            requestUrl: `/employee/get_top_five_late_summary?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETLATESTAFFSUMMARY,
            extraProps: {id: GETLATESTAFFSUMMARY},
          },
        }),
      );
    }
  }

  constructHeadTable() {
    // if (head) {
    //   let finalizedHeadTable = Object.keys(head[0]);
    //   return finalizedHeadTable;
    // }
    return ['Emp.ID', 'Name', 'Dept.', 'Desg.'];
  }

  constructDataTable(data) {
    if (data) {
      let finalizedDataTable = data.map(item => Object.values(item));
      return finalizedDataTable;
    }
    return [
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
    ];
  }

  render() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
        },
      ],
    };

    let todaysAbsentTableDataTable = this.constructDataTable(
      this?.props?.academics?.todays_absent_summary,
    );

    let lateStaffTableDataTable = this.constructDataTable(
      this?.props?.academics?.late_staff_summary,
    );

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
                textAlign: 'center',
                backgroundColor: '#006add',
              }}
              headerText={[
                <Text style={{color: 'white', width: '100%'}}>
                  {`Staff Attendance Summary`}
                </Text>,
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
                  <View style={{width: '33%'}}>
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
                      headerStyle={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: 'grey',
                      }}
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
                      width: '33%',
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
                      headerStyle={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: 'grey',
                      }}
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
                  <View style={{width: '33%'}}>
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
                      headerStyle={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: 'grey',
                      }}
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
                textAlign: 'center',
              }}
              useOtherTag={true}
              headerText={[
                <Text
                  style={{
                    color: '#006add',
                    width: '100%',
                  }}>{`Today's Absent`}</Text>,
              ]}
              headerStyle={{
                width: '100%',
              }}
              cardBody={[
                <CustomTable2
                  tableData={{
                    dataTable: todaysAbsentTableDataTable,
                  }}
                />,
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
              useOtherTag={true}
              headerText={[
                <Text
                  style={{
                    color: '#006add',
                    width: '100%',
                  }}>{`Top 5 Late staff (Current month)`}</Text>,
              ]}
              headerStyle={{width: '100%'}}
              cardBody={[
                <CustomTable5
                  tableData={{
                    dataTable: lateStaffTableDataTable,
                  }}
                />,
              ]}
            />
          </View>
          {/* <View style={{
            backgroundColor: 'red',
            height: 'auto'
          }}>
            <CardItemBordered

              cardStyle={{

                textAlign: 'center', borderRadius: 8,
              }}
              useOtherTag={true}
              headerText={[<CustomTable />]}
              headerStyle={{
                textAlign: 'center',
                marginTop: -100
              }}
              cardBody={{}}
              cardBodyStyle={[{ backgroundColor: 'blue' }]}


            />
          </View> */}

          {/* <View style={{ width: '32%', height: 'auto' }}>
              <CardItemBordered

                cardStyle={{ textAlign: 'center', shadowOpacity: 0.30, elevation: 10, borderRadius: 8 }}
                headerText={[<Text style={{ fontSize: 15, color: 'grey' }}>Monthly Collection</Text>]}
                useDividerTag={true}
                useOtherTag={true}
                headerStyle={{ textAlign: 'center' }}
                cardBody={[<H2 style={{ color: '#006add', fontWeight: 'bold', width: '100%', textAlign: 'center', marginTop: -10 }}>525,000</H2>]}
              />
            </View> */}

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
                <Text
                  style={{
                    color: 'white',
                    width: '100%',
                  }}>
                  {'Deducted Days & LWP Amount'}
                </Text>,
              ]}
              headerStyle={{
                width: '100%',
              }}
              useOtherTag={true}
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
                  <View style={{width: '48%', height: 'auto'}}>
                    <CardItemBordered
                      cardStyle={{
                        shadowOpacity: 0.3,
                        elevation: 10,
                        borderRadius: 8,
                        borderBottomColor: '#37b349',
                        borderBottomWidth: 4,
                      }}
                      headerText={[<></>]}
                      headerStyle={{
                        textAlign: 'center',
                        width: '100%',
                        backgroundColor: 'blue',
                      }}
                      useOtherTag={true}
                      doNotUseHeaders={true}
                      cardBody={[
                        <View
                          style={{
                            // textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                            width: '100%',
                          }}>
                          <Text style={{color: 'grey'}}>{'Month:Sept.21'}</Text>
                          <Text
                            style={{
                              backgroundColor: '#37b349',
                              color: 'white',
                              // fontSize: 18,
                              width: '100%',
                              textAlign: 'center',
                              // padding: 10,
                              marginTop: 5,
                              paddingTop: 5,
                              paddingBottom: 5,
                            }}>
                            {'Deducted Days'}
                          </Text>
                          <Text style={{marginTop: 20, marginBottom: 20}}>
                            <H1
                              style={{
                                color: '#006add',
                                fontWeight: 'bold',
                              }}>{`25`}</H1>
                          </Text>
                          <Text
                            style={{
                              backgroundColor: '#37b349',
                              color: 'white',
                              // fontSize: 18,
                              width: '100%',
                              textAlign: 'center',
                              // padding: 10,
                              paddingTop: 5,
                              paddingBottom: 5,
                            }}>
                            {'LWP Amount'}
                          </Text>
                          <Text style={{marginTop: 20}}>
                            <H1
                              style={{
                                backgroundColor: 'white',
                                color: '#006add',
                                fontWeight: 'bold',
                              }}>{`104,543`}</H1>
                          </Text>
                        </View>,
                      ]}
                      cardBodyStyle={[
                        {
                          height: 'auto',
                          paddingLeft: 0,
                          paddingRight: 0,
                        },
                      ]}
                    />
                  </View>
                  <View style={{width: '48%', height: 'auto'}}>
                    <CardItemBordered
                      cardStyle={{
                        shadowOpacity: 0.3,
                        elevation: 10,
                        borderRadius: 8,
                        borderBottomColor: '#37b349',
                        borderBottomWidth: 4,
                      }}
                      headerText={[<></>]}
                      headerStyle={{
                        textAlign: 'center',
                        width: '100%',
                        backgroundColor: 'blue',
                      }}
                      useOtherTag={true}
                      doNotUseHeaders={true}
                      cardBody={[
                        <View
                          style={{
                            // textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                            width: '100%',
                          }}>
                          <Text
                            style={{
                              color: 'grey',
                              // backgroundColor: 'red',
                              // width: '100%',
                            }}>
                            {'Month:Aug.21'}
                          </Text>
                          <Text
                            style={{
                              backgroundColor: '#37b349',
                              color: 'white',
                              // fontSize: 18,
                              width: '100%',
                              textAlign: 'center',
                              // padding: 10,
                              marginTop: 5,
                              paddingTop: 5,
                              paddingBottom: 5,
                            }}>
                            {'Deducted Days'}
                          </Text>
                          <Text style={{marginTop: 20, marginBottom: 20}}>
                            <H1
                              style={{
                                color: '#006add',
                                fontWeight: 'bold',
                              }}>{`25`}</H1>
                          </Text>
                          <Text
                            style={{
                              backgroundColor: '#37b349',
                              color: 'white',
                              // fontSize: 18,
                              width: '100%',
                              textAlign: 'center',
                              // padding: 10,
                              paddingTop: 5,
                              paddingBottom: 5,
                            }}>
                            {'LWP Amount'}
                          </Text>
                          <Text style={{marginTop: 20}}>
                            <H1
                              style={{
                                backgroundColor: 'white',
                                color: '#006add',
                                fontWeight: 'bold',
                              }}>{`95,665`}</H1>
                          </Text>
                        </View>,
                      ]}
                      cardBodyStyle={[
                        {
                          height: 'auto',
                          paddingLeft: 0,
                          paddingRight: 0,
                        },
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
          <View>
            <CardItemBordered
              cardStyle={{
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
              }}
              useOtherTag={true}
              headerText={[
                <CustomTable4 tableHeader={`Sep. 2021 Salary`} />,
                <CustomTable4 tableHeader={`Aug. 2021 Salary`} />,
              ]}
              headerStyle={{width: '100%'}}
              cardBody={[]}
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
})(Academics);
