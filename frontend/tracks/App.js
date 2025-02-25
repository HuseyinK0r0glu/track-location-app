import React from 'react';

/// switch type of navigator used for switching between different screens without allowing users to go back
import { createAppContainer , createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

const switchNavigator = createSwitchNavigator({

  // there will be parts here 
  // first one is for authentication flow
  // second one is non authenticaton flow that contains our tracks and etc.

  // we are going to have links to other navigations 

  resolveAuth : ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup : SignupScreen,
    Signin : SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow : createStackNavigator({
      TrackList : TrackListScreen,
      TrackDetail : TrackDetailScreen 
    }), 
    CreateTrack : TrackCreateScreen,
    Account : AccountScreen,
    
  })

});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref = { (navigator) => {
          setNavigator(navigator);
        }}/>
      </AuthProvider>
    </LocationProvider>
  );
};