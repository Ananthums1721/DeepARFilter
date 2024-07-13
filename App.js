import { View, Text } from 'react-native'
import React from 'react'
import { Camera } from 'react-native-deepar';

// ..

const cameraPermission = await Camera.getCameraPermissionStatus();
const microphonePermission = await Camera.getMicrophonePermissionStatus();

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App