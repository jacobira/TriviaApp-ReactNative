import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
 
import { Navigator } from './components/Navigator';

const App = () => {

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
};

export default App;
