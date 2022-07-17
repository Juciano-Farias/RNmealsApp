import { Text, View, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
// import { useRoute } from '@react-navigation/native'

const MealsOverViewScreen = ({ route }) => {
  // const route = useRoute()
  // const { categoryId } = route.params
  // can be used in nested components which is not registered as a screen (useRoute)

  const { categoryId } = route.params

  return ( 
    <View style={styles.container}>
        <Text>MealsOverViewScreen - {categoryId}</Text>
    </View>
  )
}

export default MealsOverViewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})