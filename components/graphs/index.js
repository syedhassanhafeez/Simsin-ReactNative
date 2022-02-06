import React, {Component} from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  View,
  H1,
} from 'native-base';

import {Dimensions} from 'react-native';

const CustomBarGraph = ({graphData}) => {
  return (
    <BarChart
      data={{
        labels: [...graphData.labels],
        datasets: [
          {
            data: [...graphData.data],
            colors: [
              (opacity = 1) => `#006add`,
              (opacity = 1) => `#39b54a`,
              (opacity = 1) => `#006add`,
              (opacity = 1) => `#39b54a`,
              (opacity = 1) => `#006add`,
              (opacity = 1) => `#39b54a`,
              (opacity = 1) => `#006add`,
              (opacity = 1) => `#39b54a`,
              (opacity = 1) => `#006add`,
              (opacity = 1) => `#39b54a`,
              (opacity = 1) => `#006add`,
              (opacity = 1) => `#39b54a`,
              (opacity = 1) => `#006add`,
            ],
          },
        ],
      }}
      width={Dimensions.get('window').width - 25} // from react-native
      height={220}
      yAxisLabel="Rs."
      yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: '#e26a00',
        // backgroundGradientFrom: "#fff",
        // backgroundGradientTo: "#fff",
        // barPercentage: 0.7,
        // decimalPlaces: 2, // optional, defaults to 2dp
        // color: (opacity = 1) => `rgba(56, 179, 73, ${opacity})`,
        // labelColor: (opacity = 1) => `rgba(56, 179, 73, ${opacity})`,
        backgroundGradientFrom: 'white',
        backgroundGradientTo: 'white',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `#FFFFFF`,
        labelColor: (opacity = 1) => `rgba(56, 179, 73, ${opacity})`,
        barPercentage: 0.38,
        barRadius: 5,
        fillShadowGradient: 'blue',
        fillShadowGradientOpacity: 1,

        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
          stroke: '#ffa726',
        },
      }}
      withCustomBarColorFromData={true}
      flatColor={true}
      withHorizontalLabels={true}
      fromZero={true}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

const CustomLineGraph = ({graphData}) => {
  return (
    <LineChart
      data={{
        labels: [graphData.labels],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
            color: (opacity = 1) => `rgba(56, 179, 73, ${opacity})`, // optional
            strokeWidth: 2, // optional
          },
          ,
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
            color: () => '#006add',
            strokeWidth: 2,
          },
        ],
        // legend: ['Rainy Days'], // optional
      }}
      width={Dimensions.get('window').width - 25}
      height={256}
      yAxisLabel="Rs."
      // verticalLabelRotation={30}
      chartConfig={{
        backgroundColor: 'white',
        backgroundGradientFrom: 'white',
        backgroundGradientTo: 'white',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(56, 179, 73, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(56, 179, 73, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};
const CustomLineGraph2 = ({graphData}) => {
  return (
    <LineChart
      data={{
        labels: [...graphData.labels],
        datasets: [
          {
            data: [...graphData.data],
            color: (opacity = 1) => `rgba(56, 179, 73, ${opacity})`, // optional
            strokeWidth: 2, // optional
          },
          // , {
          //   data: [
          //     Math.random() * 100,
          //     Math.random() * 100,
          //     Math.random() * 100,
          //     Math.random() * 100,
          //     Math.random() * 100,
          //     Math.random() * 100,
          //     Math.random() * 100,
          //     Math.random() * 100,
          // Math.random() * 100,
          // Math.random() * 100,
          // Math.random() * 100,
          // Math.random() * 100,
          // Math.random() * 100,], color: () => '#006add', strokeWidth: 2,
          // },
        ],
        // legend: ['Rainy Days'], // optional
      }}
      width={Dimensions.get('window').width - 25}
      height={256}
      yAxisLabel="Rs."
      // verticalLabelRotation={30}
      chartConfig={{
        backgroundColor: 'white',
        backgroundGradientFrom: 'white',
        backgroundGradientTo: 'white',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(56, 179, 73, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(56, 179, 73, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export {CustomBarGraph, CustomLineGraph, CustomLineGraph2};
