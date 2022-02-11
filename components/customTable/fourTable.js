import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'native-base';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width - 40;
export default class CustomTable4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: [`${this.props.tableHeader}`],
      widthArr: [windowWidth],
      DataTable: [],
    };
  }

  constructTableData(rowData) {
    return [
      <View
        style={{
          marginTop: rowData.first ? 10 : null,
          marginBottom: rowData.last ? 10 : null,
          marginLeft: 15,
          justifyContent: 'space-between',
          padding: 5,
          borderBottomColor: rowData.last ? null : 'grey',
          borderBottomWidth: rowData.last ? null : 0.7,
          flexDirection: 'row',
        }}>
        <>
          <Text style={{color: 'grey'}}>{rowData.name}</Text>
          <Text style={{color: '#006add', fontWeight: 'bold'}}>
            {rowData.amount}
          </Text>
        </>
      </View>,
    ];
  }

  componentDidMount() {
    let data = [
      {
        name: 'Salary Staff',
        amount: this.props?.monthData?.emp_count,
        first: true,
      },
      {name: 'Gross Salary', amount: this.props?.monthData?.gross_salary},
      {name: 'Allowances', amount: this.props?.monthData?.allowances},
      {name: 'Deductions', amount: this.props?.monthData?.deductions},
      {
        name: 'Net Salary',
        amount: this.props?.monthData?.net_salary,
        last: true,
      },
    ];
    let constructedData = data.map(item => this.constructTableData(item));
    this.setState({DataTable: [...constructedData]});
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table>
          <Row
            data={state.HeadTable}
            style={styles.HeadStyle}
            textStyle={styles.HeaderText}
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

    // shadowOpacity: 0.30, elevation: 10, borderRadius: 8, borderBottomColor: '#37b349', borderBottomWidth: 4
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',

    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    borderRadius: 10,
  },
  HeadStyle: {
    backgroundColor: '#37b349',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  HeaderText: {
    margin: 5,

    color: 'white',
  },

  TableText: {
    // padding: 15
  },
});
