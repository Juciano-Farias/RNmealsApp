import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

import CategoryGridTile from '../components/CategoryGridTile'

function renderCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}

const CategoryScreen = () => {
  return (
    <FlatList 
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
    />
  )
}

export default CategoryScreen