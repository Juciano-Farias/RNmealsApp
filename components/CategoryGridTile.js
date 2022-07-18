import { Pressable, View, Text, StyleSheet, Platform } from "react-native"
import { useNavigation } from '@react-navigation/native'

import Shadow from './Shadow'

const CategoryGridTile = ({ title, color, onPress }) => {
  // const navigation = useNavigation()

  // function navigateHandler() {
  //   navigation.navigate('MealsOverview')
  // }
  // If i would want to nagivate throught a simple component (not a screen component that recives the navigate props throught the Stack.Screen component) i can use the useNavigation hook to get the navigation object and use in the component
  // Or i could pass the navigation prop throught the screen component, that's an another approche to solve the same issue

  return (
    <Shadow style={styles.gridItem}>
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
    </Shadow>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,  
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