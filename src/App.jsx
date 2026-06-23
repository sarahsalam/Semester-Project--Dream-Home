import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import WelcomeScreen from './src/WelcomeScreen';
import HomeScreen from './src/HomeScreen';
import AboutUsScreen from './src/AboutUsScreen';
import ModelScreen1 from './src/ModelScreen1';
import ModelScreen from './src/ModelScreen';
import Login from './src/Auth/Login';
import SignUp from './src/Auth/SignUp';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="AboutUsScreen"
          component={AboutUsScreen}
          options={{ title: 'About Us' }}
        />
        <Stack.Screen
          name="model1"
          component={ModelScreen1}
         
        />
        <Stack.Screen
          name="model"
          component={ModelScreen}
         
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
         
        /><Stack.Screen
          name="SignUp"
          component={SignUp}
         
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
