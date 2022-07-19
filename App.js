import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'

import CategoryScreen from './screens/CategoryScreen';
import MealsOverViewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return <Drawer.Navigator 
      screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      headerTitleAlign: "center",
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1'
    }}>
    <Drawer.Screen
      name="Categories"
      component={CategoryScreen}
      options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => {<Ionicons color={color} size={size} name="list" />}
      }}
    />
    <Drawer.Screen
      name="FavoritesScreen"
      component={FavoriteScreen}
    />
  </Drawer.Navigator>
}

export default function App() {
  return ( 
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
            headerTitleAlign: "center",
            }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />          
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
          />
          <Stack.Screen
            name="MealsDetail"
            component={MealDetailScreen}
            options={{ title: 'About the meal' }}
          />    
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
