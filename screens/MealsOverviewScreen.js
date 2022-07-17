import { FlatList, View, StyleSheet, Text } from 'react-native'
import { MEALS } from '../data/dummy-data'

import MealItem from '../components/MealItem'

// import { useRoute } from '@react-navigation/native'

const MealsOverViewScreen = ({ route }) => {
  // const route = useRoute()
  // const { categoryId } = route.params
  // can be used in nested components which is not registered as a screen (useRoute)

  const { categoryId } = route.params

  function renderMealItem(itemData) {
    return (
      <MealItem title={itemData.item.title} />
    )
  }

  const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0)
  console.log(displayedMeals)
  return ( 
    <View style={styles.container}>
        <FlatList 
          data={displayedMeals}
          keyExtractor={item => item.id}
          renderItem={renderMealItem}
        />
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