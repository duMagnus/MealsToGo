import React from "react";
import { SafeAreaView, StatusBar, Text, View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { colors } from "../../../utils/colors";

export const RestaurantsScreen = () => (
  <>
    <StatusBar backgroundColor={colors.frenchGray} barStyle={"dark-content"} />
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.listContainer}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.frenchGray,
  },
  searchBar: {
    backgroundColor: colors.frenchGray,
    padding: 20,
  },
  listContainer: {
    backgroundColor: colors.silverLakeBlue,
    padding: 20,
    flex: 1,
  },
});
