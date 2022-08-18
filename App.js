import { StyleSheet, View } from 'react-native';
import Calculator from './calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#252b27'
  },
});
