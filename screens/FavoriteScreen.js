import { useContext } from 'react'
import { FavoritesContext } from '../store/context/favorite-context'
import { MealsList } from '../components/MealsList/MealsList'
import { MEALS } from '../data/dummy-data'

const FavoriteScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext)

  const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal))

  return (
    <MealsList items={favoriteMeals}/>
  )
}

export default FavoriteScreen