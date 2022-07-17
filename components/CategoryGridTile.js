import { Pressable, View, Text, StyleSheet, Platform } from "react-native"
import { useNavigation } from '@react-navigation/native'

const CategoryGridTile = ({ title, color, onPress }) => {
  // const navigation = useNavigation()

  // function navigateHandler() {
  //   navigation.navigate('MealsOverview')
  // }
  // If i would want to nagivate throught a simple component (not a screen component that recives the navigate props throught the Stack.Screen component) i can use the useNavigation hook to get the navigation object and use in the component
  // Or i could pass the navigation prop throught the screen component, that's an another approche to solve the same issue

  return (
    <View style={styles.gridItem}>
        <Pressable
          android_ripple={{ color: '#fff' }}
          style={({ pressed }) => [
            styles.button, pressed ? styles.buttonPressed : null
          ]}
          onPress={onPress}
        >
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white', // For IOS shadows you need to add a background color, even if it's just 'white'
    shadowColor: 'black',
    shadowOpacity: .25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // For IOS you can't use overflow hidden, because it'll hide your shadows
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})