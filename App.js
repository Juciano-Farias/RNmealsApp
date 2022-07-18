import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from './screens/CategoryScreen';
import MealsOverViewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return ( 
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: 'All Categories',
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
            headerTitleAlign: "center",
            }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{
              title: 'All Categories',
            }}
          />          
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId // route object was passed as a parameter on CategoryScreen.js on the navigation object
            //   return {
            //     title: catId
            //   }
            // }}
            // an approche to pass options to each screen
          />
          <Stack.Screen
            name="MealsDetail"
            component={MealDetailScreen}
          />    
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
