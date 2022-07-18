import { Image, Text, View, StyleSheet } from 'react-native'

import MealDetails from '../components/MealDetails'

import { MEALS } from '../data/dummy-data'

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }}/>
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredient</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map(step => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})