import React, { useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    messaging()
      .getToken()
      .then(
        token => {
          console.log({ token });
        }
      )
  }
}

const App = () => {
  useEffect(() => {
    requestUserPermission()
  }, []);
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App