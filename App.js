import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CategoryScreen from './screens/CategoryScreen';

export default function App() {
  return (
    <>
      <CategoryScreen />
      <StatusBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
