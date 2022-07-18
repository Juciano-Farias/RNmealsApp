import { View, StyleSheet } from 'react-native'

const Shadow = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
        {children}
    </View>
  )
}

export default Shadow

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: .25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // For IOS you can't use overflow hidden, because it'll hide your shadows 
  }
})