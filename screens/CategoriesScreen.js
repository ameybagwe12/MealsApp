import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
// importing dummy data

export default function CategoriesScreen({ navigation }) {
  // to render the data of CATEGORY from dummy-data
  function renderCategoryItem(itemData) {
    // to navigate to particular page
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id, // to pass the data to navigation screen
      });
      // MealsOverview is a unique name given
    }

    return (
      <CategoryGridTile
        // since the data is object inside a list
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        // passing props to component
      ></CategoryGridTile>
    );
  }

  return (
    <FlatList // uses predefined prop of react-native for rendering list
      data={CATEGORIES} // passing category data
      key={(item) => item.id} // unique key for each list
      renderItem={renderCategoryItem.bind()} // rendering function call
      numColumns={2} // default is 1 to render items in columns
    ></FlatList>
  );
}
