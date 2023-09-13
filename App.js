import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#E0E1DD" barStyle={"dark-content"} />
        <View style={styles.searchBar}>
          <Text>Search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E1DD",
  },
  searchBar: {
    backgroundColor: "#E0E1DD",
    padding: 20,
  },
  listContainer: {
    backgroundColor: "#778DA9",
    padding: 20,
    flex: 1,
  },
});
