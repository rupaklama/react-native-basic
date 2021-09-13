import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const firstName = 'Rupak';

  return (
    <View>
      <Text style={styles.heading}>Getting started with React Native</Text>
      <Text style={styles.subHeading}>My name is {firstName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 45,
  },
  subHeading: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
