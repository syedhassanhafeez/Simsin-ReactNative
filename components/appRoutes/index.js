import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Login from '../login/index.js';
import FooterTabsIconText from '../footers/FooterTab.js';
import Main from '../tabs/Main.js';
import Fee from '../tabs/Fee.js';
import HR from '../tabs/HR.js';
import Academics from '../tabs/Academics.js';
const AppRoutes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="home"
        component={Login}
        title="Login"
        initial={true}
        hideNavBar={true}
      />
      <Scene
        key="about"
        component={FooterTabsIconText}
        title="Login"
        hideNavBar={true}
      />
      {/* <Scene
        key='fee'
        component={Fee}
        title='View More'
      />
      <Scene
        key='academic'
        component={Academics}
        title='Login'
        hideNavBar={true}
      />
      <Scene
        key='hr'
        component={HR}
        title='Login'
        hideNavBar={true}

      /> */}
    </Scene>
  </Router>
);
export default AppRoutes;
