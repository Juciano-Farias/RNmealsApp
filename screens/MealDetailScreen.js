import { Image, Text, View, StyleSheet, ScrollView } from 'react-native'

import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'

import MealDetails from '../components/MealDetails'

import { MEALS } from '../data/dummy-data'

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}/>
      <Text style={styles.title} >{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOutterContainer}>
        <View style={styles.listContainer }>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients}/>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOutterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '80%',
  },
})