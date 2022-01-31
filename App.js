/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  extendTheme,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppRoutes from './components/appRoutes';

import FooterTab from './components/footers/FooterTab';

// const Section = ({ children, title }) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };




const App = () => {

  // login = async (email, password) => {
  //   const res = await axios.post(
  //     'http://test.arwaj.com.pk:8085/sims_in/api/login',
  //     { email, password },
  //   ).catch((res) => {
  //     return { status: 401, message: 'Unauthorized' }
  //   })
    // const backgroundStyle = {
    //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // };

    return <AppRoutes />

  };



  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      // fontSize: 24,
      // fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      // fontSize: 18,
      // fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

  export default App;
