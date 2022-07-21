import { useLayoutEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'

import MealsList from '../components/MealsList/MealsList'

// import { useRoute } from '@react-navigation/native'

const MealsOverViewScreen = ({ route, navigation }) => {
  // const route = useRoute()
  // const { categoryId } = route.params
  // can be used in nested components which is not registered as a screen (useRoute)

  const { categoryId } = route.params

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId).title

    navigation.setOptions({
      title: categoryTitle
    })
  },[categoryId, navigation])

  const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0)

  return <MealsList items={displayedMeals}/>
}

export default MealsOverViewScreen
