import { Text, Pressable, View, Image, StyleSheet, Platform } from "react-native"

import Shadow from './Shadow'

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <Shadow style={styles.mealItem}>
        <Pressable
          android_ripple={{ color: '#ccc' }}
          style={({ pressed }) => pressed ? styles.buttonPressed : null}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image source={{ uri: imageUrl }} style={styles.image} />
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailItem}>{duration}</Text>
              <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
              <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            </View>
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