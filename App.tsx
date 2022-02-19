import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {Provider} from 'react-redux'
import HomeScreen from './components/screens/HomeScreen';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider >
          <Stack.Navigator>
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown:false

            }}
            />

          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
    
  );
}