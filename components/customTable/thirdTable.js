import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col,
} from 'react-native-table-component';

export default class CustomTable3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HeadTable: ['Sep.2021 Salary'],
            widthArr: [300],
            DataTable: [
                [<Text style={{
                    marginTop: 15,
                    marginLeft: 15,
                    padding: 5,
                    borderBottomColor: 'grey',
                    borderBottomWidth: 0.7,
                    width: 270,
                    color: '#006add',
                    fontWeight: 'bold',
                    
                }}>Salary Staff                               <Text style={{ color: '#37b349',fontWeight: 'bold' }}>53</Text></Text>],
                [<Text style={{
                    marginLeft: 15,
                    padding: 5,
                    borderBottomColor: 'grey',
                    borderBottomWidth: 0.7,
                    width: 270,
                    color: '#006add',
                    fontWeight: 'bold',
                }}>Gross Salary                             <Text style={{ color: '#37b349',fontWeight: 'bold' }}>624050</Text></Text>],
                [<Text style={{
                    marginLeft: 15,
                    padding: 5,
                    borderBottomColor: 'grey',
                    borderBottomWidth: 0.7,
                    width: 270,
                    color: '#006add',
                    fontWeight: 'bold',
                }}>Allowances                               <Text style={{ color: '#37b349',fontWeight: 'bold' }}>20000</Text></Text>],
                [<Text style={{
                    marginLeft: 15,
                    padding: 5,
                    borderBottomColor: 'grey',
                    borderBottomWidth: 0.7,
                    width: 270,
                    color: '#006add',
                    fontWeight: 'bold',
                }}>Deductions                              <Text style={{ color: '#37b349',fontWeight: 'bold' }}>-126000</Text></Text>],
                [<Text style={{
                    marginLeft: 15,
                    marginBottom: 15,
                    padding: 5,
                    color: '#006add',
                    fontWeight: 'bold',
                }}>Net Salary                                 <Text style={{ color: '#37b349',fontWeight: 'bold' }}>518050</Text></Text>],




            ],
        };
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Table

                >
                    <Row
                        data={state.HeadTable}
                        style={styles.HeadStyle}
                        textStyle={styles.HeaderText}
                    />
                    <Rows widthArr={state.widthArr} data={state.DataTable} textStyle={styles.TableText} />
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        borderRadius: 10
    },
    HeadStyle: {
        backgroundColor: '#37b349',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    HeaderText: {
        margin: 5,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    TableText: {
        margin: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.7,
        width: 280,
        color: '#006add',
        fontWeight: 'bold',

    },
});
