import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorite-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );

  console.log(favoriteMealsContext.ids, favoriteMeals);

  if(favoriteMeals.length === 0){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorites meals added yet</Text>
      </View>
    )
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  }
})