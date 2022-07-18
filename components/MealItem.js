import { Text, Pressable, View, Image, StyleSheet, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"

import Shadow from './Shadow'
import MealDetails from './MealDetails'

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
  const navigation = useNavigation()
  
  function selectMealItemHandler() {
    navigation.navigate('MealsDetail', {
      mealId: id
    })
  }
  
  return (
    <Shadow style={styles.mealItem}>
        <Pressable
          android_ripple={{ color: '#ccc' }}
          style={({ pressed }) => pressed ? styles.buttonPressed : null}
          onPress={selectMealItemHandler}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image source={{ uri: imageUrl }} style={styles.image} />
              <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetails
              affordability={affordability}
              complexity={complexity}
              duration={duration}
            />
          </View>
        </Pressable>
    </Shadow>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    shadowOpacity: 0.35,
    backgroundColor: 'white',
  },
  buttonPressed: {
    opacity: 0.35,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
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