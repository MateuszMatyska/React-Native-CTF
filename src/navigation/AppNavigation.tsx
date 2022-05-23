import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import WebViewScreen from '../screens/WebViewScreen/WebViewScreen';
import StorageScreen from '../screens/StorageScreen/StorageScreen';
import FollowDeepLink from '../screens/FollowDeepLink/FollowDeepLinkScreen'
import SecretCodeScreen from '../screens/SecretCodeScreen/SecretCodeScreen'

const Stack = createNativeStackNavigator();

const ApplicationStack: React.FC<any> = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="WebView" component={WebViewScreen} />
    <Stack.Screen name="Storage" component={StorageScreen} />
    <Stack.Screen name="DeepLink" component={FollowDeepLink} />
    <Stack.Screen name="SecretCode" component={SecretCodeScreen} />
  </Stack.Navigator>
);

export default ApplicationStack