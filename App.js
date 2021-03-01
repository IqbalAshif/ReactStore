import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppContainer from './Route';
import PageNavigator from './Navigators/PageNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <PageNavigator />
    </NavigationContainer>
  );
};

export default App;
