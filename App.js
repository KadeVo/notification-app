import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import * as Notifications from 'expo-notifications'

export default function App() {
  // useEffect(() => {
  //   ;(async () => {
  //     const { status } = await Notifications.requestPermissionsAsync()
  //     if (status !== 'granted') {
  //       alert('Notification permissions are required!')
  //     }
  //   })()
  // }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
