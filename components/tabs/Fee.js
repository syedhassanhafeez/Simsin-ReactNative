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
import CustomTable from '../customTable';
import {connect} from 'react-redux';
import {CustomBarGraph, CustomLineGraph} from '../graphs';
import CardItemBordered from '../cards/CardItemBordered';
import PickerInput from '../pickerInput';
import {ScrollView} from 'react-native';
import {GETTFCOMPARISON, GETTOP5DEFAULTERSSUMMARY} from '../../constants';
import {
  GETTFCOMPARISONID,
  GETTOP5DEFAULTERSSUMMARYID,
} from '../../constants/ids';
import {genericAction} from '../../redux/actions';

class Fee extends Component {
  componentDidMount() {
    if (this?.props?.auth?.selectedCampusDetails?.campus_id) {
      this.props.dispatch(
        genericAction({
          requestDetails: {
            requestUrl: `/fee/get_top_five_defaulters_summary?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETTOP5DEFAULTERSSUMMARY,
            extraProps: {id: GETTOP5DEFAULTERSSUMMARYID},
          },
        }),
      );

      this.props.dispatch(
        genericAction({
          requestDetails: {
            requestUrl: `/fee/get_tf_comparison?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETTFCOMPARISON,
            extraProps: {id: GETTFCOMPARISONID},
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
            requestUrl: `/fee/get_top_five_defaulters_summary?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETTOP5DEFAULTERSSUMMARY,
            extraProps: {id: GETTOP5DEFAULTERSSUMMARYID},
          },
        }),
      );
      this.props.dispatch(
        genericAction({
          requestDetails: {
            requestUrl: `/fee/get_tf_comparison?campus_id=${this?.props?.auth?.selectedCampusDetails?.campus_id}`,
            requestMethod: 'GET',
            requestHeaders: {},
            requestBody: {},
          },
          reducerDetails: {
            actionType: GETTFCOMPARISON,
            extraProps: {id: GETTFCOMPARISONID},
          },
        }),
      );
    }
  }

  constructDataTable(data) {
    console.log('data === ', data);

    if (data) {
      let finalizedDataTable = data.map(item => Object.values(item));
      if (finalizedDataTable.length > 0) {
        return finalizedDataTable;
      }
      return [];
    }
    return [];
  }

  render() {
    // let receivableCollectionGraphLabels = this.props?.accounts?.receivable_collection
    //   ? Object.keys(this.props.accounts.receivable_collection)
    //   : [];
    // let receivableCollectionGraphData = this.props?.accounts?.receivable_collection
    //   ? Object.values(this.props.accounts.receivable_collection).map(item => {
    //       return parseInt(item.replaceAll(',', ''));
    //     })
    //   : [];
    let top5DefaultersSummaryData = this.constructDataTable(
      this?.props?.accounts?.top_five_defaulters_summary,
    );
    console.log('top5DefaultersSummaryData === ', top5DefaultersSummaryData);
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
                  {'Top 5 Defaulters \n'}
                </Text>,
              ]}
              headerStyle={{width: '100%'}}
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
          <View style={{justifyContent: 'center'}}>
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
                  <CustomTable
                    tableData={{
                      dataTable: top5DefaultersSummaryData,
                    }}
                  />,
                ]}
                headerStyle={{
                  textAlign: 'center',
                  marginTop: -140,
                }}
                cardBody={[]}
              />
            </View>
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
                cardBody={[<H2 style={{ color: '#006add', fontWeight: 'bold', width: '110%', textAlign: 'center', marginTop: -10 }}>525,000</H2>]}
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
              }}
              headerText={[
                <Text style={{color: '#006add', fontWeight: 'bold'}}>
                  {'Bill Vs Collection'}
                </Text>,
              ]}
              headerStyle={{
                flexDirection: 'row',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              headerText={[
                <Text style={{color: '#006add'}}>{'Bill Vs Collection'}</Text>,
              ]}
              headerStyle={{
                flexDirection: 'row',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              cardBody={[
                <H1>789</H1>,
                // <CustomLineGraph
                //   graphData={{
                //     labels: totalReceivableGraphLabels,
                //     data: totalReceivableGraphData,
                //   }}
                // />,
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
                  {'Current month Vs Last month TF'}
                </Text>,
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
                <View
                  style={{
                    width: '100%',
                    height: 'auto',
                    flexDirection: 'row',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}>
                  <View style={{width: '50%'}}>
                    <CardItemBordered
                      cardStyle={{
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
                          }}>
                          {`\n${this.props.fee.last_month_collection}`}
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
                  </View>
                  <View style={{width: '50%'}}>
                    <CardItemBordered
                      cardStyle={{
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
                          }}>
                          {`\n${this.props.fee.this_month_collection}`}
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
            <CardItemBordered
              cardStyle={{
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                backgroundColor: 'white',
                height: 10,
              }}
              headerText={['']}
              cardBody={{}}
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
    fee: state.feeReducer,
    // academics: state.academicsReducer,
    // hr: state.hrReducer,
  };
})(Fee);
