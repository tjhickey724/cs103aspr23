import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';


const PlaceholderImage = require('./assets/adaptive-icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#00f' }}>
           Open up App.js to start working on your app!</Text>
      <ImageViewer placeholderImageSource={PlaceholderImage} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffccaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
