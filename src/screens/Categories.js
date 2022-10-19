import { View, Text, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

function Categories({ navigation }) {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default Categories;
