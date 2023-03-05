import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouritesContextProvider from "./store/context/favourites-context";

// View -> UI View(IOS), AndroidView(Android)
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      {/* All the navigations will take place
       */}
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            {/* name required for navigation */}
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{
                title: "Meals Categories",
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverViewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryID;
              //   return {
              //     title: catId,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              // options={{ -> Instead go to Meal Detail screen for button
              //   // at the right of the header
              //   headerRight: () => {
              //     return <Button title="Tap Me !" onPress={}>In the header</Button>;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}
