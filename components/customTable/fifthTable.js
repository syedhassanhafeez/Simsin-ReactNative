import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {View} from 'native-base';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';

const windowWidth = Dimensions.get('window').width - 40;

export default class CustomTable5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['Emp.ID', 'Name', 'Desig.', 'No. of Late'],
      widthArr: [
        windowWidth / 4.5,
        windowWidth / 3,
        windowWidth / 4,
        windowWidth / 5,
      ],
      DataTable: this?.props?.tableData?.dataTable
        ? [...this?.props?.tableData?.dataTable]
        : [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
          ],
    };
  }

  render() {
    const state = this.state;
    console.log('this?.props?.tableData === ', this?.props?.tableData);
    return (
      <View style={styles.container}>
        <Table
          borderStyle={{
            borderWidth: 0.5,
            borderColor: 'grey',
          }}>
          <Row
            data={state.HeadTable}
            style={styles.HeadStyle}
            textStyle={styles.HeaderText}
            widthArr={state.widthArr}
          />
          <Rows
            widthArr={state.widthArr}
            data={
              this?.props?.tableData?.dataTable?.length
                ? [...this?.props?.tableData?.dataTable]
                : [
                    ['', '', '', ''],
                    ['', '', '', ''],
                    ['', '', '', ''],
                    ['', '', '', ''],
                    ['', '', '', ''],
                    ['', '', '', ''],
                    ['', '', '', ''],
                  ]
            }
            textStyle={styles.TableText}
          />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    // marginLeft: 10,
    // paddingLeft: 20,
    // paddingLeft: 20,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  HeadStyle: {
    // height: 50,

    backgroundColor: '#37b349',
  },
  HeaderText: {
    margin: 10,
    color: 'white',
  },
  TableText: {
    // margin: 10,
  },
});
