import { useLayoutEffect } from 'react'
import { Text } from 'react-native'

import { MEALS } from '../data/dummy-data'

const MealDetailScreen = ({ route }) => {

  return (
    <Text>{route.params.mealId}</Text>
  )
}

export default MealDetailScreen