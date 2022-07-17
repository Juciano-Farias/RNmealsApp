import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

import CategoryGridTile from '../components/CategoryGridTile'


const CategoryScreen = ({ navigation }) => {
  function pressHandler() {
    navigation.navigate('MealsOverview')
  }
  function renderCategoryItem(itemData) {
    
    return <CategoryGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color}/>
  }

  return (
    <FlatList  
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
    />
  )
}

export default CategoryScreen