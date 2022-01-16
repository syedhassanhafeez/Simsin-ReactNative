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

export default class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: [`CID`, 'Name', 'Class/Sec.', 'Amount'],
      currentWidth: Dimensions.get('window').width - 40,
      widthArr: [
        windowWidth / 5,
        windowWidth / 3,
        windowWidth / 4,
        windowWidth / 4,
      ],
      DataTable: [
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

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(
  //     "Dimensions.get('window').width === ",
  //     Dimensions.get('window').width,
  //   );
  //   if (Dimensions.get('window').width - 40 !== prevState.currentWidth) {
  //     this.setState({
  //       currentWidth: Dimensions.get('window').width - 40,
  //       widthArr: [
  //         (Dimensions.get('window').width - 40) / 4,
  //         (Dimensions.get('window').width - 40) / 4,
  //         (Dimensions.get('window').width - 40) / 4,
  //         (Dimensions.get('window').width - 40) / 4,
  //       ],
  //     });
  //   }
  // }

  // find_dimesions(layout) {
  //   const {x, y, width, height} = layout;
  //   console.warn(x);
  //   console.warn(y);
  //   console.warn(width);
  //   console.warn(height);
  // }

  render() {
    const state = this.state;
    return (
      <View
        // onLayout={event => {
        //   this.find_dimesions(event.nativeEvent.layout);
        // }}
        style={styles.container}>
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
            data={state.DataTable}
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
