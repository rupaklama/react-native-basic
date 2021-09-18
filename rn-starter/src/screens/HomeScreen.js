import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// Stack Navigator provides deafult props object
const HomeScreen = ({ navigation }) => {
  // navigation object's 'navigate' func is what use for navigating
  // console.log(props.navigation.navigate)

  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>

      <Button
        // title prop with string
        title='Go to Components Screen'
        // onPress prop for click event
        // 'navigate' func is what use for navigating
        onPress={() => navigation.navigate('Components')}
        // note - passing Name of the ROUTE as string from Stack Navigator in App.js
        // to navigate to that particular Screen
      />

      <Button title='Go to List Screen' onPress={() => navigation.navigate('List')} />

      <Button title='Go to Image Screen' onPress={() => navigation.navigate('Image')} />

      <Button title='Go to Box Screen' onPress={() => navigation.navigate('Box')} />

      {/*  Not a self closing element, it detects a tab or press */}
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        {/* we can add multiple elements here like single clicking on image with text*/}
        <Text>
          I am Touchable Opacity with more configuration than normal button! I was born before Button.{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
