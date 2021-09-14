import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 1 },
    { name: 'Friend #2', age: 2 },
    { name: 'Friend #3', age: 3 },
    { name: 'Friend #4', age: 4 },
    { name: 'Friend #5', age: 5 },
    { name: 'Friend #6', age: 6 },
    { name: 'Friend #7', age: 7 },
    { name: 'Friend #8', age: 8 },
    { name: 'Friend #9', age: 9 },
    { name: 'Friend #10', age: 10 },
  ];

  // FlatList is performant & optimized to render list in react native
  // Need to pass 'data' prop which contains an array of data
  // Also need to pass 'renderItem' prop which is a Function that will turn each array items into an elements
  return (
    <View>
      <FlatList
        // Used to extract a unique key for a given item at the specified index
        keyExtractor={item => item.name}
        // If true, renders items next to each other horizontally instead of stacked vertically.
        // horizontal

        // When true, shows a horizontal scroll indicator.
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // our array data
        data={friends}
        // renderItem function
        // renderItem={element => {
        renderItem={({ item }) => {
          // note - element is not an array item but it's an Individual Array Object with lots of properties
          // console.log(element); - {item: {…}, index: 0, separators: {…}}
          // note - an 'item property of element' contains our array item
          // console.log(element.item);

          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    // space above & below for text elements
    marginVertical: 50,
  },
});

export default ListScreen;
