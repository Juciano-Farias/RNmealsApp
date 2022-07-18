import { useLayoutEffect } from 'react'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data'

import MealItem from '../components/MealItem'

// import { useRoute } from '@react-navigation/native'

const MealsOverViewScreen = ({ route, navigation }) => {
  // const route = useRoute()
  // const { categoryId } = route.params
  // can be used in nested components which is not registered as a screen (useRoute)

  const { categoryId } = route.params

  function renderMealItem(itemData) {
    const item = itemData.item

    const mealsItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }
    return (
      <MealItem {...mealsItemProps}/>
    )
  }

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId).title

    navigation.setOptions({
      title: categoryTitle
    })
  },[categoryId, navigation])

  const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0)
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