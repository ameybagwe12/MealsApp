import { View, StyleSheet, Text, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
// useLayout for some side effect to render before loading a component

// route is a prop of navigation
export default function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  // here param is a cat id passed in navigation from CategoryScreen

  // MEALS that belong to category
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title; // GET THE TITLE through id

    // it takes all the properties of data to pass to diff screen
    navigation.setOptions({ title: categoryTitle });
  });

  function renderMealItem(itemData) {
    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
    };
    // another way of passing more number of props
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      {/* displaying the param */}
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
